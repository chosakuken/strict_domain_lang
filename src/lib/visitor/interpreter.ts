import { Visitor } from "./visitor.js";
import { RuntimeValue } from "./runtimeValue/runtimeValue.js";
import { ProgramNode } from "../ast/nodes/program.js";
import {
  BoolValue,
  FloatValue,
  IntValue,
  StringValue,
} from "./runtimeValue/valuableValue.js";
import { BinaryNode } from "../ast/nodes/binary.js";
import { IntNode } from "../ast/nodes/int.js";
import { CallNode } from "../ast/nodes/call.js";
import { AssignNode } from "../ast/nodes/assign.js";
import { VarNode } from "../ast/nodes/var.js";
import { CompareNode } from "../ast/nodes/compare.js";
import { IfNode } from "../ast/nodes/if.js";
import { FloatNode } from "../ast/nodes/float.js";
import { StringNode } from "../ast/nodes/string.js";
import { DeclareNode } from "../ast/nodes/declare.js";

type Func = (args: RuntimeValue[]) => RuntimeValue;

export class BoqqiInterpreter implements Visitor<RuntimeValue> {
  private funcs: Map<string, Func>; // 関数表
  private vars: Map<string, RuntimeValue>; // 変数表
  private readonly output: (text: string) => void; // 出力先

  constructor(private readonly outputDevice: (text: string) => void) {
    this.output = outputDevice;
    this.funcs = new Map<string, Func>();
    this.vars = new Map<string, RuntimeValue>();
    // 組み込み関数
    this.funcs.set("print", (args: RuntimeValue[]) => {
      for (const arg of args) {
        this.output(`${String(arg.value)}\n`);
      }
      return new IntValue(0); // 正常動作として 0 を返す
    });
  }
  // ビジター
  visitProgram(node: ProgramNode): RuntimeValue {
    for (const child of node.body) {
      child.accept(this);
    }
    return new IntValue(0); // 正常動作として 0 を返す
  }
  visitBinary(node: BinaryNode): RuntimeValue {
    const left = node.left.accept(this);
    const right = node.right.accept(this);
    // 本来は意味解析の部分で触れるが今回はここに書く
    if (typeof left.value != "number") {
      throw new Error("式の左辺には数値を入力しなければなりません");
    }
    if (typeof right.value != "number") {
      throw new Error("式の右辺には数値を入力しなければなりません");
    }
    // 実行
    switch (node.operator) {
      case "+":
        return this.numberToRuntimeValue(left.value + right.value);
      case "-":
        return this.numberToRuntimeValue(left.value - right.value);
      case "*":
        return this.numberToRuntimeValue(left.value * right.value);
      case "/":
        return this.numberToRuntimeValue(left.value / right.value);
      default:
        throw new Error(`演算子 ${String(node.operator)} は未定義です`);
    }
  }
  visitCompare(node: CompareNode): RuntimeValue {
    const left = node.left.accept(this);
    const right = node.right.accept(this);
    switch (node.operator) {
      case "==":
        return new BoolValue(left.value == right.value);
      case "!=":
        return new BoolValue(left.value != right.value);
      case ">=":
        return new BoolValue(left.value >= right.value);
      case "<=":
        return new BoolValue(left.value <= right.value);
      case ">":
        return new BoolValue(left.value > right.value);
      case "<":
        return new BoolValue(left.value < right.value);
      default:
        throw new Error(`演算子 ${String(node.operator)} は未定義です`);
    }
  }
  visitInt(node: IntNode): RuntimeValue {
    return new IntValue(node.value);
  }
  visitFloat(node: FloatNode): RuntimeValue {
    return new FloatValue(node.value);
  }
  visitString(node: StringNode): RuntimeValue {
    return new StringValue(node.value);
  }
  visitCall(node: CallNode): RuntimeValue {
    const func = this.funcs.get(node.name);
    if (func === undefined) {
      throw new Error(`関数 ${node.name} は未定義です`);
    }
    // 引数解釈
    const args: RuntimeValue[] = [];
    for (const child of node.args) {
      args.push(child.accept(this));
    }
    // 実行
    return func(args);
  }
  visitAssign(node: AssignNode): RuntimeValue {
    const value = node.expr.accept(this);
    // エラーハンドリング
    if (!this.vars.get(node.name)) {
      throw new Error(`変数 ${node.name} は宣言されていません`);
    }
    if (value.type !== this.vars.get(node.name)?.type) {
      throw new Error(
        `変数 ${node.name} は ${this.vars.get(node.name)?.type} 型ですが、${value.type} 型が代入されようとしました`,
      );
    }
    this.vars.set(node.name, value);
    return value;
  }
  visitDeclare(node: DeclareNode): RuntimeValue {
    if (this.vars.has(node.name)) {
      throw new Error(`変数 ${node.name} は既に宣言済みです`);
    }
    switch (node.type) {
      case "int":
        this.vars.set(
          node.name,
          node.initValue ? node.initValue.accept(this) : new IntValue(0),
        );
        break;
      case "float":
        this.vars.set(
          node.name,
          node.initValue ? node.initValue.accept(this) : new FloatValue(0.0),
        );
        break;
      case "string":
        this.vars.set(
          node.name,
          node.initValue ? node.initValue.accept(this) : new StringValue(""),
        );
        break;
      default:
        throw new Error(`型 ${node.type} は存在しません`);
    }
    return new IntValue(0); // 正常動作として 0 を返す
  }
  visitVar(node: VarNode): RuntimeValue {
    const value = this.vars.get(node.name);
    if (value === undefined) {
      throw new Error(`変数 ${node.name} は未定義です`);
    }
    return value;
  }
  visitIf(node: IfNode): RuntimeValue {
    const cond = node.cond.accept(this);
    // エラーハンドリング
    if (typeof cond.value !== "boolean") {
      throw new Error("if 文の条件式には真偽値を入力しなければなりません");
    }
    // 実行
    if (cond.value) {
      for (const statement of node.trueStatement) {
        statement.accept(this);
      }
    } else if (node.falseStatement !== undefined) {
      for (const statement of node.falseStatement) {
        statement.accept(this);
      }
    }
    return new IntValue(0); // 正常動作として 0 を返す
  }
  // ヘルパー関数
  private numberToRuntimeValue(value: number): RuntimeValue {
    if (Number.isInteger(value)) {
      return new IntValue(value);
    }
    return new FloatValue(value);
  }
}

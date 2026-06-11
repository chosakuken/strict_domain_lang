import { Visitor } from "./visitor.js";
import { RuntimeValue } from "./runtimeValue/runtimeValue.js";
import { ProgramNode } from "../ast/nodes/program.js";
import { IntValue } from "./runtimeValue/numberValue.js";
import { BinaryNode } from "../ast/nodes/binary.js";
import { IntNode } from "../ast/nodes/int.js";
import { CallNode } from "../ast/nodes/call.js";
import { AssignNode } from "../ast/nodes/assign.js";
import { VarNode } from "../ast/nodes/var.js";

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
    switch (node.operator) {
      case "+":
        return new IntValue(left.value + right.value);
      case "-":
        return new IntValue(left.value - right.value);
      case "*":
        return new IntValue(left.value * right.value);
      case "/":
        return new IntValue(left.value / right.value);
      default:
        throw new Error(`演算子 ${String(node.operator)} は未定義です`);
    }
  }
  visitInt(node: IntNode): RuntimeValue {
    const value = node.value;
    if (!Number.isInteger(value)) {
      throw new Error(
        `Int 型が期待されましたが、${String(value)} が入力されました`,
      );
    }
    return new IntValue(value);
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
    this.vars.set(node.name, value);
    return value;
  }
  visitVar(node: VarNode): RuntimeValue {
    const value = this.vars.get(node.name);
    if (value === undefined) {
      throw new Error(`変数 ${node.name} は未定義です`);
    }
    return value;
  }
}

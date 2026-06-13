import { AssignNode } from "../../ast/nodes/assign.js";
import { BinaryNode } from "../../ast/nodes/binary.js";
import { BoolNode } from "../../ast/nodes/bool.js";
import { CallNode } from "../../ast/nodes/call.js";
import { CompareNode } from "../../ast/nodes/compare.js";
import { DeclareNode } from "../../ast/nodes/declare.js";
import { FloatNode } from "../../ast/nodes/float.js";
import { IfNode } from "../../ast/nodes/if.js";
import { IntNode } from "../../ast/nodes/int.js";
import { ProgramNode } from "../../ast/nodes/program.js";
import { StringNode } from "../../ast/nodes/string.js";
import { VarNode } from "../../ast/nodes/var.js";
import { Visitor } from "../visitor.js";
import { Instruction, ValueType } from "../../vm/instruction.js";

export function compile(program: ProgramNode): Instruction[] {
  const compiler = new BoqqiCompiler();
  return compiler.compile(program);
}

class BoqqiCompiler implements Visitor<void> {
  private readonly instructions: Instruction[] = [];

  compile(program: ProgramNode): Instruction[] {
    program.accept(this);
    return this.instructions;
  }

  visitProgram(node: ProgramNode): void {
    for (const statement of node.body) {
      statement.accept(this);
    }
  }

  visitBinary(node: BinaryNode): void {
    node.left.accept(this);
    node.right.accept(this);

    switch (node.operator) {
      case "+":
        this.emit({ op: "ADD" });
        break;
      case "-":
        this.emit({ op: "SUB" });
        break;
      case "*":
        this.emit({ op: "MUL" });
        break;
      case "/":
        this.emit({ op: "DIV" });
        break;
    }
  }

  visitCompare(node: CompareNode): void {
    node.left.accept(this);
    node.right.accept(this);

    switch (node.operator) {
      case "==":
        this.emit({ op: "EQ" });
        break;
      case "!=":
        this.emit({ op: "NE" });
        break;
      case ">":
        this.emit({ op: "GT" });
        break;
      case "<":
        this.emit({ op: "LT" });
        break;
      case ">=":
        this.emit({ op: "GE" });
        break;
      case "<=":
        this.emit({ op: "LE" });
        break;
    }
  }

  visitInt(node: IntNode): void {
    this.emit({ op: "PUSH_INT", value: node.value });
  }

  visitFloat(node: FloatNode): void {
    this.emit({ op: "PUSH_FLOAT", value: node.value });
  }

  visitString(node: StringNode): void {
    this.emit({ op: "PUSH_STRING", value: node.value });
  }

  visitBool(node: BoolNode): void {
    this.emit({ op: "PUSH_BOOL", value: node.value });
  }

  visitCall(node: CallNode): void {
    for (const arg of node.args) {
      arg.accept(this);
    }
    this.emit({ op: "CALL", name: node.name, argc: node.args.length });
    this.emit({ op: "POP" });
  }

  visitAssign(node: AssignNode): void {
    node.expr.accept(this);
    this.emit({ op: "STORE", name: node.name });
  }

  visitDeclare(node: DeclareNode): void {
    const type = this.valueType(node.type);

    if (node.domain !== undefined) {
      node.domain.max.accept(this);
      node.domain.min.accept(this);
    }

    if (node.initValue !== undefined) {
      node.initValue.accept(this);
    } else {
      this.emitDefaultValue(type);
    }

    this.emit({
      op: "DECLARE",
      name: node.name,
      type,
      hasDomain: node.domain !== undefined,
    });
  }

  visitVar(node: VarNode): void {
    this.emit({ op: "LOAD", name: node.name });
  }

  visitIf(node: IfNode): void {
    node.cond.accept(this);
    const jumpIfFalseIndex = this.emit({
      op: "JUMP_IF_FALSE",
      target: -1,
    });

    for (const statement of node.trueStatement) {
      statement.accept(this);
    }

    if (node.falseStatement === undefined) {
      this.patchJump(jumpIfFalseIndex, this.instructions.length);
      return;
    }

    const jumpToEndIndex = this.emit({ op: "JUMP", target: -1 });
    this.patchJump(jumpIfFalseIndex, this.instructions.length);

    for (const statement of node.falseStatement) {
      statement.accept(this);
    }

    this.patchJump(jumpToEndIndex, this.instructions.length);
  }

  private emit(instruction: Instruction): number {
    this.instructions.push(instruction);
    return this.instructions.length - 1;
  }

  private patchJump(index: number, target: number): void {
    const instruction = this.instructions[index];
    if (instruction.op !== "JUMP" && instruction.op !== "JUMP_IF_FALSE") {
      throw new Error("ジャンプ命令の生成に失敗しました");
    }

    this.instructions[index] = {
      ...instruction,
      target,
    };
  }

  private emitDefaultValue(type: ValueType): void {
    switch (type) {
      case "int":
        this.emit({ op: "PUSH_INT", value: 0 });
        break;
      case "float":
        this.emit({ op: "PUSH_FLOAT", value: 0.0 });
        break;
      case "string":
        this.emit({ op: "PUSH_STRING", value: "" });
        break;
      case "bool":
        this.emit({ op: "PUSH_BOOL", value: false });
        break;
    }
  }

  private valueType(type: string): ValueType {
    switch (type) {
      case "int":
      case "float":
      case "string":
      case "bool":
        return type;
      default:
        throw new Error(`型 ${type} は存在しません`);
    }
  }
}

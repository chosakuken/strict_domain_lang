import { Visitor } from "./visitor.js";
import { RuntimeValue } from "./runtimeValue/runtimeValue.js";
import { ProgramNode } from "../ast/nodes/program.js";
import { IntValue } from "./runtimeValue/numberValue.js";
import { BinaryNode } from "../ast/nodes/binary.js";
import { IntNode } from "../ast/nodes/int.js";

export interface OutputDevice {
  write(text: string): void;
}

export class BoqqiInterpreter implements Visitor<RuntimeValue> {
  constructor(private readonly outputDevice: OutputDevice) {}

  // 出力機能
  out(value: RuntimeValue): void {
    this.outputDevice.write(`${String(value.value)}\n`);
  }

  visitProgram(node: ProgramNode): RuntimeValue {
    const value = node.body.accept(this);
    this.out(value);
    return value;
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
}

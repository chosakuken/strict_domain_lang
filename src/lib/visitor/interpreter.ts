import { Visitor } from "./visitor.js";
import { RuntimeValue } from "./runtimeValue/runtimeValue.js";
import { ProgramNode } from "../ast/nodes/program.js";
import { IntValue } from "./runtimeValue/numberValue.js";
import { BinaryNode } from "../ast/nodes/binary.js";
import { IntNode } from "../ast/nodes/int.js";

export class BoqqiInterpreter implements Visitor<RuntimeValue> {
  visitProgram(node: ProgramNode): RuntimeValue {
    return node.body.accept(this);
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
        throw new Error(`演算子 ${node.operator} は未定義です`);
    }
  }
  visitInt(node: IntNode): RuntimeValue {
    const value = node.value;
    if (!Number.isInteger(value)) {
      throw new Error(`Int 型が期待されましたが、${value} が入力されました`);
    }
    return new IntValue(value);
  }
}

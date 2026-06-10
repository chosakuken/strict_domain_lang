import { BinaryNode } from "../ast/nodes/binary.js";
import { ExprNode } from "../ast/nodes/expr.js";
import { IntNode } from "../ast/nodes/int.js";
import { ProgramNode } from "../ast/nodes/program.js";
import { RuntimeValue } from "./runtimeValue/runtimeValue.js";

// visitor の 雛形を明記
export interface Visitor {
  visitProgram(node: ProgramNode): RuntimeValue;
  visitExpr(node: ExprNode): RuntimeValue;
  visitBinary(node: BinaryNode): RuntimeValue;
  visitInt(node: IntNode): RuntimeValue;
}

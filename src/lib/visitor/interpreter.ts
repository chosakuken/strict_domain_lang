import { BinaryNode } from "../ast/nodes/binary.js";
import { ExprNode } from "../ast/nodes/expr.js";
import { IntNode } from "../ast/nodes/int.js";
import { ProgramNode } from "../ast/nodes/program.js";
import { Visitor } from "./visitior.js";

export class SdlInterpreter implements Visitor {
  visitProgram(node: ProgramNode): void {}
  visitExpr(node: ExprNode): void {}
  visitBinary(node: BinaryNode): void {}
  visitInt(node: IntNode): void {}
}

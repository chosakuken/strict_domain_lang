import { BinaryNode } from "../ast/nodes/binary.js";
import { ExprNode } from "../ast/nodes/expr.js";
import { IntNode } from "../ast/nodes/int.js";
import { ProgramNode } from "../ast/nodes/program.js";

// visitor の 雛形を明記
export interface Visitor {
  visitProgram(node: ProgramNode): void;
  visitExpr(node: ExprNode): void;
  visitBinary(node: BinaryNode): void;
  visitInt(node: IntNode): void;
}

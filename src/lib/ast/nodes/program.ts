// program ノード
import { Visitor } from "../../visitor/visitor.js";
import { ExprNode } from "./expr.js";
import { AstNode } from "./node.js";

export class ProgramNode implements AstNode {
  readonly kind: "program";
  readonly body: ExprNode;
  accept<T>(visitor: Visitor<T>) {
    return visitor.visitProgram(this);
  }
  constructor(body: ExprNode) {
    this.kind = "program";
    this.body = body;
  }
}

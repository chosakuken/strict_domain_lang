import { Visitor } from "../../visitor/visitor.js";
import { ExprNode } from "./expr.js";
import { AstNode } from "./node.js";

export class AssignNode implements AstNode {
  readonly kind: "assign";
  readonly name: string;
  readonly expr: ExprNode;
  accept<T>(visitor: Visitor<T>): T {
    return visitor.visitAssign(this);
  }
  constructor(name: string, expr: ExprNode) {
    this.kind = "assign";
    this.name = name;
    this.expr = expr;
  }
}

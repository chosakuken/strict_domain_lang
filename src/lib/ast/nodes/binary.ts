import { Visitor } from "../../visitor/visitor.js";
import { ExprNode } from "./expr.js";
import { AstNode } from "./node.js";

export type BinaryOperator = "+" | "-" | "*" | "/";

export class BinaryNode implements AstNode {
  readonly kind: "binary";
  readonly operator: BinaryOperator;
  readonly left: ExprNode;
  readonly right: ExprNode;
  accept(visitor: Visitor): void {
    visitor.visitBinary(this);
  }
  constructor(operator: BinaryOperator, left: ExprNode, right: ExprNode) {
    this.kind = "binary";
    this.operator = operator;
    this.left = left;
    this.right = right;
  }
}

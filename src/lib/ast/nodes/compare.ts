import { Visitor } from "../../visitor/visitor.js";
import { ExprNode } from "./expr.js";
import { AstNode } from "./node.js";

export type CompareOperator = "==" | "!=" | "<" | ">" | "<=" | ">=";

export class CompareNode implements AstNode {
  readonly kind: "compare";
  readonly operator: CompareOperator;
  readonly left: ExprNode;
  readonly right: ExprNode;
  accept<T>(visitor: Visitor<T>) {
    return visitor.visitCompare(this);
  }
  constructor(operator: CompareOperator, left: ExprNode, right: ExprNode) {
    this.kind = "compare";
    this.operator = operator;
    this.left = left;
    this.right = right;
  }
}

import { Visitor } from "../../visitor/visitor.js";
import { ExprNode } from "./expr.js";
import { AstNode } from "./node.js";
import { StatementNode } from "./statement.js";

export class IfNode implements AstNode {
  readonly kind: "if";
  readonly cond: ExprNode;
  readonly trueStatement: StatementNode[];
  readonly falseStatement?: StatementNode[];
  accept<T>(visitor: Visitor<T>): T {
    return visitor.visitIf(this);
  }
  constructor(
    cond: ExprNode,
    trueStatement: StatementNode[],
    falseStatement?: StatementNode[],
  ) {
    this.kind = "if";
    this.cond = cond;
    this.trueStatement = trueStatement;
    this.falseStatement = falseStatement;
  }
}

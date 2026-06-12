import { Visitor } from "../../visitor/visitor.js";
import { ExprNode } from "./expr.js";
import { AstNode } from "./node.js";

export class DeclareNode implements AstNode {
  readonly kind: "declare";
  readonly type: string;
  readonly name: string;
  readonly initValue?: ExprNode;
  accept<T>(visitor: Visitor<T>): T {
    return visitor.visitDeclare(this);
  }
  constructor(t: string, n: string, i?: ExprNode) {
    this.kind = "declare";
    this.type = t;
    this.name = n;
    this.initValue = i;
  }
}

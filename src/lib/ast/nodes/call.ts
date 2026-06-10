import { Visitor } from "../../visitor/visitor.js";
import { ExprNode } from "./expr.js";
import { AstNode } from "./node.js";

export class CallNode implements AstNode {
  readonly kind: "call";
  readonly name: string;
  readonly args: ExprNode[];
  accept<T>(visitor: Visitor<T>): T {
    return visitor.visitCall(this);
  }
  constructor(name: string, args: ExprNode[]) {
    this.kind = "call";
    this.name = name;
    this.args = args;
  }
}

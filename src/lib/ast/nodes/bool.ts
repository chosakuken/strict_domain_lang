import { Visitor } from "../../visitor/visitor.js";
import { AstNode } from "./node.js";

export class BoolNode implements AstNode {
  readonly kind: "bool";
  readonly value: boolean;
  accept<T>(visitor: Visitor<T>): T {
    return visitor.visitBool(this);
  }
  constructor(v: boolean) {
    this.kind = "bool";
    this.value = v;
  }
}

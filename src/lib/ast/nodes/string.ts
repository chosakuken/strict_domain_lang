import { Visitor } from "../../visitor/visitor.js";
import { AstNode } from "./node.js";

export class StringNode implements AstNode {
  readonly kind: "string";
  readonly value: string;
  accept<T>(visitor: Visitor<T>) {
    return visitor.visitString(this);
  }
  constructor(value: string) {
    this.kind = "string";
    this.value = value;
  }
}

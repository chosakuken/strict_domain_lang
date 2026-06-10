import { Visitor } from "../../visitor/visitor.js";
import { AstNode } from "./node.js";

export class IntNode implements AstNode {
  readonly kind: "int";
  readonly value: number;
  accept<T>(visitor: Visitor<T>) {
    return visitor.visitInt(this);
  }
  constructor(value: number) {
    this.kind = "int";
    this.value = value;
  }
}

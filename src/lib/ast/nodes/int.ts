import { Visitor } from "../../visitor/visitior.js";
import { AstNode } from "./node.js";

export class IntNode implements AstNode {
  readonly kind: "int";
  readonly value: number;
  accept(visitor: Visitor): void {
    visitor.visitInt(this);
  }
  constructor(value: number) {
    this.kind = "int";
    this.value = value;
  }
}

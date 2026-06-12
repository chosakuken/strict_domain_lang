import { Visitor } from "../../visitor/visitor.js";
import { AstNode } from "./node.js";

export class FloatNode implements AstNode {
  readonly kind: "float";
  readonly value: number;
  accept<T>(visitor: Visitor<T>) {
    return visitor.visitFloat(this);
  }
  constructor(value: number) {
    this.kind = "float";
    this.value = value;
  }
}

import { Visitor } from "../../visitor/visitor.js";
import { AstNode } from "./node.js";

export class IntNode implements AstNode {
  readonly kind: "int";
  readonly value: number;
  readonly max?: number;
  readonly min?: number;
  accept<T>(visitor: Visitor<T>) {
    return visitor.visitInt(this);
  }
  constructor(value: number, max?: number, min?: number) {
    this.kind = "int";
    this.value = value;
    this.max = max;
    this.min = min;
  }
}

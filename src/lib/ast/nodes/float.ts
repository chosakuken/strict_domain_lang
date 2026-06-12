import { Visitor } from "../../visitor/visitor.js";
import { AstNode } from "./node.js";

export class FloatNode implements AstNode {
  readonly kind: "float";
  readonly value: number;
  readonly max?: number;
  readonly min?: number;
  accept<T>(visitor: Visitor<T>) {
    return visitor.visitFloat(this);
  }
  constructor(value: number, max?: number, min?: number) {
    this.kind = "float";
    this.value = value;
    this.max = max;
    this.min = min;
  }
}

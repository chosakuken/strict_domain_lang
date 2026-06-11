import { Visitor } from "../../visitor/visitor.js";
import { AstNode } from "./node.js";

export class VarNode implements AstNode {
  readonly kind: "var";
  readonly name: string;
  accept<T>(visitor: Visitor<T>): T {
    return visitor.visitVar(this);
  }
  constructor(name: string) {
    this.kind = "var";
    this.name = name;
  }
}

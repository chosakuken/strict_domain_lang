// program ノード
import { Visitor } from "../../visitor/visitor.js";
import { AstNode } from "./node.js";
import { StatementNode } from "./statement.js";

export class ProgramNode implements AstNode {
  readonly kind: "program";
  readonly body: StatementNode[];
  accept<T>(visitor: Visitor<T>) {
    return visitor.visitProgram(this);
  }
  constructor(body: StatementNode[]) {
    this.kind = "program";
    this.body = body;
  }
}

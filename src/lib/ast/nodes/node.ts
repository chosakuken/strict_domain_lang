import { Visitor } from "../../visitor/visitor.js";

// AST の基礎単位を定義
export interface AstNode {
  readonly kind: string; // ノードの種類
  accept<T>(visitor: Visitor<T>): T; // ビジター用
}

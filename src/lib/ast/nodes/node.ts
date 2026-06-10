import { RuntimeValue } from "../../visitor/runtimeValue/runtimeValue.js";
import { Visitor } from "../../visitor/visitor.js";

// AST の基礎単位を定義
export interface AstNode {
  readonly kind: string; // ノードの種類
  accept(visitor: Visitor): RuntimeValue; // ビジター用
}

import { BinaryNode } from "./binary.js";
import { CompareNode } from "./compare.js";
import { FloatNode } from "./float.js";
import { IntNode } from "./int.js";
import { StringNode } from "./string.js";
import { VarNode } from "./var.js";

export type ExprNode =
  | IntNode
  | FloatNode
  | StringNode
  | BinaryNode
  | VarNode
  | CompareNode;

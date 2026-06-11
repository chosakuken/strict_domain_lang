import { BinaryNode } from "./binary.js";
import { IntNode } from "./int.js";
import { VarNode } from "./var.js";

export type ExprNode = IntNode | BinaryNode | VarNode;

import { CallNode } from "./call.js";
import { ExprNode } from "./expr.js";

export type StatementNode = ExprNode | CallNode;

import { AssignNode } from "./assign.js";
import { CallNode } from "./call.js";
import { DeclareNode } from "./declare.js";
import { IfNode } from "./if.js";

export type StatementNode = AssignNode | CallNode | IfNode | DeclareNode;

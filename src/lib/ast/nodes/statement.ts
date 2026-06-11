import { AssignNode } from "./assign.js";
import { CallNode } from "./call.js";
import { IfNode } from "./if.js";

export type StatementNode = AssignNode | CallNode | IfNode;

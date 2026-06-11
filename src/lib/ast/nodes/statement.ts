import { AssignNode } from "./assign.js";
import { CallNode } from "./call.js";

export type StatementNode = AssignNode | CallNode;

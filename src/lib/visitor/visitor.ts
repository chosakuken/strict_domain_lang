import { AssignNode } from "../ast/nodes/assign.js";
import { BinaryNode } from "../ast/nodes/binary.js";
import { CallNode } from "../ast/nodes/call.js";
import { CompareNode } from "../ast/nodes/compare.js";
import { FloatNode } from "../ast/nodes/float.js";
import { IfNode } from "../ast/nodes/if.js";
import { IntNode } from "../ast/nodes/int.js";
import { ProgramNode } from "../ast/nodes/program.js";
import { StringNode } from "../ast/nodes/string.js";
import { VarNode } from "../ast/nodes/var.js";

// visitor の 雛形を明記
export interface Visitor<T> {
  visitProgram(node: ProgramNode): T;
  visitBinary(node: BinaryNode): T;
  visitCompare(node: CompareNode): T;
  visitInt(node: IntNode): T;
  visitFloat(node: FloatNode): T;
  visitString(node: StringNode): T;
  visitCall(node: CallNode): T;
  visitAssign(node: AssignNode): T;
  visitVar(node: VarNode): T;
  visitIf(node: IfNode): T;
}

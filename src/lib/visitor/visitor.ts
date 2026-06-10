import { BinaryNode } from "../ast/nodes/binary.js";
import { CallNode } from "../ast/nodes/call.js";
import { IntNode } from "../ast/nodes/int.js";
import { ProgramNode } from "../ast/nodes/program.js";

// visitor の 雛形を明記
export interface Visitor<T> {
  visitProgram(node: ProgramNode): T;
  visitBinary(node: BinaryNode): T;
  visitInt(node: IntNode): T;
  visitCall(node: CallNode): T;
}

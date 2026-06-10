import { parseToTree } from "../parser/parse.js";
import { buildProgramAst } from "./buildAst.js";
import type { ProgramNode } from "./nodes/program.js";

export function parseToAst(source: string): ProgramNode {
  return buildProgramAst(parseToTree(source).tree);
}

import { parseToTree } from "../parser/parse.js";
import { buildProgramAst } from "./buildAst.js";
import type { ProgramNode } from "./nodes/program.js";

export function parseToAst(source: string): ProgramNode {
  const parseTree = parseToTree(source);

  if (parseTree.parser.numberOfSyntaxErrors > 0) {
    throw new Error("[Parse Error]");
  }
  return buildProgramAst(parseTree.tree);
}

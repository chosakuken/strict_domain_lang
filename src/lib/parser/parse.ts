import { CharStream, CommonTokenStream } from "antlr4ng";

import { BoQQILexer } from "./generated/BoQQILexer.js";
import { BoQQIParser, ProgramContext } from "./generated/BoQQIParser.js";
import { ParseTreeJson, parseTreeToJson } from "./treeToJson.js";

export interface ParseResult {
  readonly parser: BoQQIParser;
  readonly tree: ProgramContext;
}

export function parseToTree(source: string): ParseResult {
  const lexer = new BoQQILexer(CharStream.fromString(source));
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new BoQQIParser(tokenStream);

  return {
    parser,
    tree: parser.program(),
  };
}

export function parse(source: string): ParseTreeJson {
  const res = parseToTree(source);
  return parseTreeToJson(res.tree, res.parser);
}

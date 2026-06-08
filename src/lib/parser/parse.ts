import { CharStream, CommonTokenStream } from "antlr4ng";

import { StrictDomainLangLexer } from "./generated/StrictDomainLangLexer.js";
import {
  ProgramContext,
  StrictDomainLangParser,
} from "./generated/StrictDomainLangParser.js";
import { ParseTreeJson, parseTreeToJson } from "./treeToJson.js";

export interface ParseResult {
  readonly parser: StrictDomainLangParser;
  readonly tree: ProgramContext;
}

export function parse(source: string): ParseTreeJson {
  const lexer = new StrictDomainLangLexer(CharStream.fromString(source));
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new StrictDomainLangParser(tokenStream);

  const res = {
    parser,
    tree: parser.program(),
  };

  return parseTreeToJson(res.tree, res.parser);
}

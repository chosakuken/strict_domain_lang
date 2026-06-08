import { CharStream, CommonTokenStream } from "antlr4ng";

import { StrictDomainLangLexer } from "./generated/StrictDomainLangLexer.js";
import {
  ProgramContext,
  StrictDomainLangParser,
} from "./generated/StrictDomainLangParser.js";

export interface ParseResult {
  readonly parser: StrictDomainLangParser;
  readonly tree: ProgramContext;
}

export function parse(source: string): ParseResult {
  const lexer = new StrictDomainLangLexer(CharStream.fromString(source));
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new StrictDomainLangParser(tokenStream);

  return {
    parser,
    tree: parser.program(),
  };
}

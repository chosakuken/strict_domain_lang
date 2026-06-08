import { CharStream, CommonTokenStream, Token } from "antlr4ng";

import { StrictDomainLangLexer } from "../parser/generated/StrictDomainLangLexer.js";

export interface TokenInfo {
  readonly type: number;
  readonly name: string;
  readonly text: string;
  readonly line: number;
  readonly column: number;
}

export function tokenize(source: string): TokenInfo[] {
  const lexer = new StrictDomainLangLexer(CharStream.fromString(source));
  const tokenStream = new CommonTokenStream(lexer);

  tokenStream.fill();

  return tokenStream
    .getTokens()
    .filter((token) => token.type !== Token.EOF)
    .map((token) => ({
      type: token.type,
      name: lexer.vocabulary.getSymbolicName(token.type) ?? "UNKNOWN",
      text: token.text ?? "",
      line: token.line,
      column: token.column,
    }));
}

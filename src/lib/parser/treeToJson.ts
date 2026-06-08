import {
  Parser,
  ParserRuleContext,
  TerminalNode,
  Token,
  type ParseTree,
} from "antlr4ng";

export type ParseTreeJson = RuleNodeJson | TokenNodeJson;

export interface RuleNodeJson {
  readonly kind: "rule";
  readonly rule: string;
  readonly text: string;
  readonly children: ParseTreeJson[];
}

export interface TokenNodeJson {
  readonly kind: "token";
  readonly token: string;
  readonly type: number;
  readonly text: string;
  readonly line: number;
  readonly column: number;
}

export function parseTreeToJson(
  tree: ParseTree,
  parser: Parser,
): ParseTreeJson {
  if (tree instanceof TerminalNode) {
    return tokenNodeToJson(tree, parser);
  }

  if (tree instanceof ParserRuleContext) {
    return ruleNodeToJson(tree, parser);
  }

  throw new TypeError(`Unsupported parse tree node: ${tree.constructor.name}`);
}

function ruleNodeToJson(node: ParserRuleContext, parser: Parser): RuleNodeJson {
  const children: ParseTreeJson[] = [];

  for (let index = 0; index < node.getChildCount(); index += 1) {
    const child = node.getChild(index);

    if (child !== null) {
      children.push(parseTreeToJson(child, parser));
    }
  }

  return {
    kind: "rule",
    rule: parser.ruleNames[node.ruleIndex] ?? `rule#${String(node.ruleIndex)}`,
    text: node.getText(),
    children,
  };
}

function tokenNodeToJson(node: TerminalNode, parser: Parser): TokenNodeJson {
  const symbol = node.getSymbol();

  return {
    kind: "token",
    token:
      symbol.type === Token.EOF
        ? "EOF"
        : (parser.vocabulary.getSymbolicName(symbol.type) ??
          parser.vocabulary.getLiteralName(symbol.type) ??
          `token#${String(symbol.type)}`),
    type: symbol.type,
    text: symbol.text ?? "",
    line: symbol.line,
    column: symbol.column,
  };
}

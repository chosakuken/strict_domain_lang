import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

export class StrictDomainLangLexer extends antlr.Lexer {
  public static readonly LET = 1;
  public static readonly ASSIGN = 2;
  public static readonly SEMI = 3;
  public static readonly LPAREN = 4;
  public static readonly RPAREN = 5;
  public static readonly PLUS = 6;
  public static readonly MINUS = 7;
  public static readonly STAR = 8;
  public static readonly SLASH = 9;
  public static readonly NUMBER = 10;
  public static readonly IDENTIFIER = 11;
  public static readonly LINE_COMMENT = 12;
  public static readonly WS = 13;

  public static readonly channelNames = ["DEFAULT_TOKEN_CHANNEL", "HIDDEN"];

  public static readonly literalNames = [
    null,
    "'let'",
    "'='",
    "';'",
    "'('",
    "')'",
    "'+'",
    "'-'",
    "'*'",
    "'/'",
  ];

  public static readonly symbolicNames = [
    null,
    "LET",
    "ASSIGN",
    "SEMI",
    "LPAREN",
    "RPAREN",
    "PLUS",
    "MINUS",
    "STAR",
    "SLASH",
    "NUMBER",
    "IDENTIFIER",
    "LINE_COMMENT",
    "WS",
  ];

  public static readonly modeNames = ["DEFAULT_MODE"];

  public static readonly ruleNames = [
    "LET",
    "ASSIGN",
    "SEMI",
    "LPAREN",
    "RPAREN",
    "PLUS",
    "MINUS",
    "STAR",
    "SLASH",
    "NUMBER",
    "IDENTIFIER",
    "LINE_COMMENT",
    "WS",
  ];

  public constructor(input: antlr.CharStream) {
    super(input);
    this.interpreter = new antlr.LexerATNSimulator(
      this,
      StrictDomainLangLexer._ATN,
      StrictDomainLangLexer.decisionsToDFA,
      new antlr.PredictionContextCache(),
    );
  }

  public get grammarFileName(): string {
    return "StrictDomainLangLexer.g4";
  }

  public get literalNames(): (string | null)[] {
    return StrictDomainLangLexer.literalNames;
  }
  public get symbolicNames(): (string | null)[] {
    return StrictDomainLangLexer.symbolicNames;
  }
  public get ruleNames(): string[] {
    return StrictDomainLangLexer.ruleNames;
  }

  public get serializedATN(): number[] {
    return StrictDomainLangLexer._serializedATN;
  }

  public get channelNames(): string[] {
    return StrictDomainLangLexer.channelNames;
  }

  public get modeNames(): string[] {
    return StrictDomainLangLexer.modeNames;
  }

  public static readonly _serializedATN: number[] = [
    4, 0, 13, 85, 6, -1, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4,
    7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7,
    10, 2, 11, 7, 11, 2, 12, 7, 12, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 2, 1,
    2, 1, 3, 1, 3, 1, 4, 1, 4, 1, 5, 1, 5, 1, 6, 1, 6, 1, 7, 1, 7, 1, 8, 1, 8,
    1, 9, 4, 9, 49, 8, 9, 11, 9, 12, 9, 50, 1, 9, 1, 9, 4, 9, 55, 8, 9, 11, 9,
    12, 9, 56, 3, 9, 59, 8, 9, 1, 10, 1, 10, 5, 10, 63, 8, 10, 10, 10, 12, 10,
    66, 9, 10, 1, 11, 1, 11, 1, 11, 1, 11, 5, 11, 72, 8, 11, 10, 11, 12, 11, 75,
    9, 11, 1, 11, 1, 11, 1, 12, 4, 12, 80, 8, 12, 11, 12, 12, 12, 81, 1, 12, 1,
    12, 0, 0, 13, 1, 1, 3, 2, 5, 3, 7, 4, 9, 5, 11, 6, 13, 7, 15, 8, 17, 9, 19,
    10, 21, 11, 23, 12, 25, 13, 1, 0, 5, 1, 0, 48, 57, 3, 0, 65, 90, 95, 95, 97,
    122, 4, 0, 48, 57, 65, 90, 95, 95, 97, 122, 2, 0, 10, 10, 13, 13, 3, 0, 9,
    10, 13, 13, 32, 32, 90, 0, 1, 1, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 5, 1, 0, 0,
    0, 0, 7, 1, 0, 0, 0, 0, 9, 1, 0, 0, 0, 0, 11, 1, 0, 0, 0, 0, 13, 1, 0, 0, 0,
    0, 15, 1, 0, 0, 0, 0, 17, 1, 0, 0, 0, 0, 19, 1, 0, 0, 0, 0, 21, 1, 0, 0, 0,
    0, 23, 1, 0, 0, 0, 0, 25, 1, 0, 0, 0, 1, 27, 1, 0, 0, 0, 3, 31, 1, 0, 0, 0,
    5, 33, 1, 0, 0, 0, 7, 35, 1, 0, 0, 0, 9, 37, 1, 0, 0, 0, 11, 39, 1, 0, 0, 0,
    13, 41, 1, 0, 0, 0, 15, 43, 1, 0, 0, 0, 17, 45, 1, 0, 0, 0, 19, 48, 1, 0, 0,
    0, 21, 60, 1, 0, 0, 0, 23, 67, 1, 0, 0, 0, 25, 79, 1, 0, 0, 0, 27, 28, 5,
    108, 0, 0, 28, 29, 5, 101, 0, 0, 29, 30, 5, 116, 0, 0, 30, 2, 1, 0, 0, 0,
    31, 32, 5, 61, 0, 0, 32, 4, 1, 0, 0, 0, 33, 34, 5, 59, 0, 0, 34, 6, 1, 0, 0,
    0, 35, 36, 5, 40, 0, 0, 36, 8, 1, 0, 0, 0, 37, 38, 5, 41, 0, 0, 38, 10, 1,
    0, 0, 0, 39, 40, 5, 43, 0, 0, 40, 12, 1, 0, 0, 0, 41, 42, 5, 45, 0, 0, 42,
    14, 1, 0, 0, 0, 43, 44, 5, 42, 0, 0, 44, 16, 1, 0, 0, 0, 45, 46, 5, 47, 0,
    0, 46, 18, 1, 0, 0, 0, 47, 49, 7, 0, 0, 0, 48, 47, 1, 0, 0, 0, 49, 50, 1, 0,
    0, 0, 50, 48, 1, 0, 0, 0, 50, 51, 1, 0, 0, 0, 51, 58, 1, 0, 0, 0, 52, 54, 5,
    46, 0, 0, 53, 55, 7, 0, 0, 0, 54, 53, 1, 0, 0, 0, 55, 56, 1, 0, 0, 0, 56,
    54, 1, 0, 0, 0, 56, 57, 1, 0, 0, 0, 57, 59, 1, 0, 0, 0, 58, 52, 1, 0, 0, 0,
    58, 59, 1, 0, 0, 0, 59, 20, 1, 0, 0, 0, 60, 64, 7, 1, 0, 0, 61, 63, 7, 2, 0,
    0, 62, 61, 1, 0, 0, 0, 63, 66, 1, 0, 0, 0, 64, 62, 1, 0, 0, 0, 64, 65, 1, 0,
    0, 0, 65, 22, 1, 0, 0, 0, 66, 64, 1, 0, 0, 0, 67, 68, 5, 47, 0, 0, 68, 69,
    5, 47, 0, 0, 69, 73, 1, 0, 0, 0, 70, 72, 8, 3, 0, 0, 71, 70, 1, 0, 0, 0, 72,
    75, 1, 0, 0, 0, 73, 71, 1, 0, 0, 0, 73, 74, 1, 0, 0, 0, 74, 76, 1, 0, 0, 0,
    75, 73, 1, 0, 0, 0, 76, 77, 6, 11, 0, 0, 77, 24, 1, 0, 0, 0, 78, 80, 7, 4,
    0, 0, 79, 78, 1, 0, 0, 0, 80, 81, 1, 0, 0, 0, 81, 79, 1, 0, 0, 0, 81, 82, 1,
    0, 0, 0, 82, 83, 1, 0, 0, 0, 83, 84, 6, 12, 0, 0, 84, 26, 1, 0, 0, 0, 7, 0,
    50, 56, 58, 64, 73, 81, 1, 6, 0, 0,
  ];

  private static __ATN: antlr.ATN;
  public static get _ATN(): antlr.ATN {
    if (!StrictDomainLangLexer.__ATN) {
      StrictDomainLangLexer.__ATN = new antlr.ATNDeserializer().deserialize(
        StrictDomainLangLexer._serializedATN,
      );
    }

    return StrictDomainLangLexer.__ATN;
  }

  private static readonly vocabulary = new antlr.Vocabulary(
    StrictDomainLangLexer.literalNames,
    StrictDomainLangLexer.symbolicNames,
    [],
  );

  public override get vocabulary(): antlr.Vocabulary {
    return StrictDomainLangLexer.vocabulary;
  }

  private static readonly decisionsToDFA =
    StrictDomainLangLexer._ATN.decisionToState.map(
      (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index),
    );
}

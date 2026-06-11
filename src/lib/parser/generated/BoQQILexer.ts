
import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";


export class BoQQILexer extends antlr.Lexer {
    public static readonly INT = 1;
    public static readonly IDENT = 2;
    public static readonly PLUS = 3;
    public static readonly MINUS = 4;
    public static readonly MUL = 5;
    public static readonly DIV = 6;
    public static readonly EQUAL = 7;
    public static readonly LPAREN = 8;
    public static readonly RPAREN = 9;
    public static readonly COMMA = 10;
    public static readonly SEMI = 11;
    public static readonly WS = 12;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
        null, null, null, "'+'", "'-'", "'*'", "'/'", "'='", "'('", "')'", 
        "','", "';'"
    ];

    public static readonly symbolicNames = [
        null, "INT", "IDENT", "PLUS", "MINUS", "MUL", "DIV", "EQUAL", "LPAREN", 
        "RPAREN", "COMMA", "SEMI", "WS"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "INT", "IDENT", "PLUS", "MINUS", "MUL", "DIV", "EQUAL", "LPAREN", 
        "RPAREN", "COMMA", "SEMI", "WS",
    ];


    public constructor(input: antlr.CharStream) {
        super(input);
        this.interpreter = new antlr.LexerATNSimulator(this, BoQQILexer._ATN, BoQQILexer.decisionsToDFA, new antlr.PredictionContextCache());
    }

    public get grammarFileName(): string { return "BoQQILexer.g4"; }

    public get literalNames(): (string | null)[] { return BoQQILexer.literalNames; }
    public get symbolicNames(): (string | null)[] { return BoQQILexer.symbolicNames; }
    public get ruleNames(): string[] { return BoQQILexer.ruleNames; }

    public get serializedATN(): number[] { return BoQQILexer._serializedATN; }

    public get channelNames(): string[] { return BoQQILexer.channelNames; }

    public get modeNames(): string[] { return BoQQILexer.modeNames; }

    public static readonly _serializedATN: number[] = [
        4,0,12,62,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,
        6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,4,0,27,8,0,
        11,0,12,0,28,1,1,1,1,5,1,33,8,1,10,1,12,1,36,9,1,1,2,1,2,1,3,1,3,
        1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,4,
        11,57,8,11,11,11,12,11,58,1,11,1,11,0,0,12,1,1,3,2,5,3,7,4,9,5,11,
        6,13,7,15,8,17,9,19,10,21,11,23,12,1,0,4,1,0,48,57,3,0,65,90,95,
        95,97,122,4,0,48,57,65,90,95,95,97,122,3,0,9,10,13,13,32,32,64,0,
        1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,
        0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,
        0,0,0,0,23,1,0,0,0,1,26,1,0,0,0,3,30,1,0,0,0,5,37,1,0,0,0,7,39,1,
        0,0,0,9,41,1,0,0,0,11,43,1,0,0,0,13,45,1,0,0,0,15,47,1,0,0,0,17,
        49,1,0,0,0,19,51,1,0,0,0,21,53,1,0,0,0,23,56,1,0,0,0,25,27,7,0,0,
        0,26,25,1,0,0,0,27,28,1,0,0,0,28,26,1,0,0,0,28,29,1,0,0,0,29,2,1,
        0,0,0,30,34,7,1,0,0,31,33,7,2,0,0,32,31,1,0,0,0,33,36,1,0,0,0,34,
        32,1,0,0,0,34,35,1,0,0,0,35,4,1,0,0,0,36,34,1,0,0,0,37,38,5,43,0,
        0,38,6,1,0,0,0,39,40,5,45,0,0,40,8,1,0,0,0,41,42,5,42,0,0,42,10,
        1,0,0,0,43,44,5,47,0,0,44,12,1,0,0,0,45,46,5,61,0,0,46,14,1,0,0,
        0,47,48,5,40,0,0,48,16,1,0,0,0,49,50,5,41,0,0,50,18,1,0,0,0,51,52,
        5,44,0,0,52,20,1,0,0,0,53,54,5,59,0,0,54,22,1,0,0,0,55,57,7,3,0,
        0,56,55,1,0,0,0,57,58,1,0,0,0,58,56,1,0,0,0,58,59,1,0,0,0,59,60,
        1,0,0,0,60,61,6,11,0,0,61,24,1,0,0,0,4,0,28,34,58,1,6,0,0
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!BoQQILexer.__ATN) {
            BoQQILexer.__ATN = new antlr.ATNDeserializer().deserialize(BoQQILexer._serializedATN);
        }

        return BoQQILexer.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(BoQQILexer.literalNames, BoQQILexer.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return BoQQILexer.vocabulary;
    }

    private static readonly decisionsToDFA = BoQQILexer._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}
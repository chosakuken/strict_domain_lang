
import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";


export class BoQQILexer extends antlr.Lexer {
    public static readonly INT = 1;
    public static readonly PLUS = 2;
    public static readonly MINUS = 3;
    public static readonly MUL = 4;
    public static readonly DIV = 5;
    public static readonly LPAREN = 6;
    public static readonly RPAREN = 7;
    public static readonly WS = 8;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
        null, null, "'+'", "'-'", "'*'", "'/'", "'('", "')'"
    ];

    public static readonly symbolicNames = [
        null, "INT", "PLUS", "MINUS", "MUL", "DIV", "LPAREN", "RPAREN", 
        "WS"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "INT", "PLUS", "MINUS", "MUL", "DIV", "LPAREN", "RPAREN", "WS",
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
        4,0,8,41,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,
        6,7,6,2,7,7,7,1,0,4,0,19,8,0,11,0,12,0,20,1,1,1,1,1,2,1,2,1,3,1,
        3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,4,7,36,8,7,11,7,12,7,37,1,7,1,7,0,
        0,8,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,1,0,2,1,0,48,57,3,0,9,10,
        13,13,32,32,42,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,
        9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,1,18,1,0,0,0,3,
        22,1,0,0,0,5,24,1,0,0,0,7,26,1,0,0,0,9,28,1,0,0,0,11,30,1,0,0,0,
        13,32,1,0,0,0,15,35,1,0,0,0,17,19,7,0,0,0,18,17,1,0,0,0,19,20,1,
        0,0,0,20,18,1,0,0,0,20,21,1,0,0,0,21,2,1,0,0,0,22,23,5,43,0,0,23,
        4,1,0,0,0,24,25,5,45,0,0,25,6,1,0,0,0,26,27,5,42,0,0,27,8,1,0,0,
        0,28,29,5,47,0,0,29,10,1,0,0,0,30,31,5,40,0,0,31,12,1,0,0,0,32,33,
        5,41,0,0,33,14,1,0,0,0,34,36,7,1,0,0,35,34,1,0,0,0,36,37,1,0,0,0,
        37,35,1,0,0,0,37,38,1,0,0,0,38,39,1,0,0,0,39,40,6,7,0,0,40,16,1,
        0,0,0,3,0,20,37,1,6,0,0
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
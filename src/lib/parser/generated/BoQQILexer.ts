
import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";


export class BoQQILexer extends antlr.Lexer {
    public static readonly IF = 1;
    public static readonly ELSE = 2;
    public static readonly TRUE = 3;
    public static readonly FALSE = 4;
    public static readonly MAX = 5;
    public static readonly MIN = 6;
    public static readonly TYPE_INT = 7;
    public static readonly TYPE_FLOAT = 8;
    public static readonly TYPE_STRING = 9;
    public static readonly TYPE_BOOL = 10;
    public static readonly PLUS = 11;
    public static readonly MINUS = 12;
    public static readonly MUL = 13;
    public static readonly DIV = 14;
    public static readonly EQUAL = 15;
    public static readonly EQ = 16;
    public static readonly NE = 17;
    public static readonly GE = 18;
    public static readonly LE = 19;
    public static readonly GT = 20;
    public static readonly LT = 21;
    public static readonly LPAREN = 22;
    public static readonly RPAREN = 23;
    public static readonly LBRACE = 24;
    public static readonly RBRACE = 25;
    public static readonly COMMA = 26;
    public static readonly COLON = 27;
    public static readonly SEMI = 28;
    public static readonly FLOAT = 29;
    public static readonly INT = 30;
    public static readonly STRING = 31;
    public static readonly IDENT = 32;
    public static readonly WS = 33;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
        null, "'if'", "'else'", "'true'", "'false'", "'max'", "'min'", "'int'", 
        "'float'", "'string'", "'bool'", "'+'", "'-'", "'*'", "'/'", "'='", 
        "'=='", "'!='", "'>='", "'<='", "'>'", "'<'", "'('", "')'", "'{'", 
        "'}'", "','", "':'", "';'"
    ];

    public static readonly symbolicNames = [
        null, "IF", "ELSE", "TRUE", "FALSE", "MAX", "MIN", "TYPE_INT", "TYPE_FLOAT", 
        "TYPE_STRING", "TYPE_BOOL", "PLUS", "MINUS", "MUL", "DIV", "EQUAL", 
        "EQ", "NE", "GE", "LE", "GT", "LT", "LPAREN", "RPAREN", "LBRACE", 
        "RBRACE", "COMMA", "COLON", "SEMI", "FLOAT", "INT", "STRING", "IDENT", 
        "WS"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "IF", "ELSE", "TRUE", "FALSE", "MAX", "MIN", "TYPE_INT", "TYPE_FLOAT", 
        "TYPE_STRING", "TYPE_BOOL", "PLUS", "MINUS", "MUL", "DIV", "EQUAL", 
        "EQ", "NE", "GE", "LE", "GT", "LT", "LPAREN", "RPAREN", "LBRACE", 
        "RBRACE", "COMMA", "COLON", "SEMI", "FLOAT", "INT", "STRING", "IDENT", 
        "WS",
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
        4,0,33,197,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,
        2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,
        13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,
        19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,
        26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,
        32,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,
        3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,
        7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,
        9,1,9,1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,15,1,15,
        1,15,1,16,1,16,1,16,1,17,1,17,1,17,1,18,1,18,1,18,1,19,1,19,1,20,
        1,20,1,21,1,21,1,22,1,22,1,23,1,23,1,24,1,24,1,25,1,25,1,26,1,26,
        1,27,1,27,1,28,4,28,158,8,28,11,28,12,28,159,1,28,1,28,4,28,164,
        8,28,11,28,12,28,165,1,29,4,29,169,8,29,11,29,12,29,170,1,30,1,30,
        1,30,1,30,5,30,177,8,30,10,30,12,30,180,9,30,1,30,1,30,1,31,1,31,
        5,31,186,8,31,10,31,12,31,189,9,31,1,32,4,32,192,8,32,11,32,12,32,
        193,1,32,1,32,0,0,33,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,
        10,21,11,23,12,25,13,27,14,29,15,31,16,33,17,35,18,37,19,39,20,41,
        21,43,22,45,23,47,24,49,25,51,26,53,27,55,28,57,29,59,30,61,31,63,
        32,65,33,1,0,6,1,0,48,57,6,0,34,34,92,92,98,98,110,110,114,114,116,
        116,4,0,10,10,13,13,34,34,92,92,3,0,65,90,95,95,97,122,4,0,48,57,
        65,90,95,95,97,122,3,0,9,10,13,13,32,32,203,0,1,1,0,0,0,0,3,1,0,
        0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,
        0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,
        0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,
        0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,
        0,0,45,1,0,0,0,0,47,1,0,0,0,0,49,1,0,0,0,0,51,1,0,0,0,0,53,1,0,0,
        0,0,55,1,0,0,0,0,57,1,0,0,0,0,59,1,0,0,0,0,61,1,0,0,0,0,63,1,0,0,
        0,0,65,1,0,0,0,1,67,1,0,0,0,3,70,1,0,0,0,5,75,1,0,0,0,7,80,1,0,0,
        0,9,86,1,0,0,0,11,90,1,0,0,0,13,94,1,0,0,0,15,98,1,0,0,0,17,104,
        1,0,0,0,19,111,1,0,0,0,21,116,1,0,0,0,23,118,1,0,0,0,25,120,1,0,
        0,0,27,122,1,0,0,0,29,124,1,0,0,0,31,126,1,0,0,0,33,129,1,0,0,0,
        35,132,1,0,0,0,37,135,1,0,0,0,39,138,1,0,0,0,41,140,1,0,0,0,43,142,
        1,0,0,0,45,144,1,0,0,0,47,146,1,0,0,0,49,148,1,0,0,0,51,150,1,0,
        0,0,53,152,1,0,0,0,55,154,1,0,0,0,57,157,1,0,0,0,59,168,1,0,0,0,
        61,172,1,0,0,0,63,183,1,0,0,0,65,191,1,0,0,0,67,68,5,105,0,0,68,
        69,5,102,0,0,69,2,1,0,0,0,70,71,5,101,0,0,71,72,5,108,0,0,72,73,
        5,115,0,0,73,74,5,101,0,0,74,4,1,0,0,0,75,76,5,116,0,0,76,77,5,114,
        0,0,77,78,5,117,0,0,78,79,5,101,0,0,79,6,1,0,0,0,80,81,5,102,0,0,
        81,82,5,97,0,0,82,83,5,108,0,0,83,84,5,115,0,0,84,85,5,101,0,0,85,
        8,1,0,0,0,86,87,5,109,0,0,87,88,5,97,0,0,88,89,5,120,0,0,89,10,1,
        0,0,0,90,91,5,109,0,0,91,92,5,105,0,0,92,93,5,110,0,0,93,12,1,0,
        0,0,94,95,5,105,0,0,95,96,5,110,0,0,96,97,5,116,0,0,97,14,1,0,0,
        0,98,99,5,102,0,0,99,100,5,108,0,0,100,101,5,111,0,0,101,102,5,97,
        0,0,102,103,5,116,0,0,103,16,1,0,0,0,104,105,5,115,0,0,105,106,5,
        116,0,0,106,107,5,114,0,0,107,108,5,105,0,0,108,109,5,110,0,0,109,
        110,5,103,0,0,110,18,1,0,0,0,111,112,5,98,0,0,112,113,5,111,0,0,
        113,114,5,111,0,0,114,115,5,108,0,0,115,20,1,0,0,0,116,117,5,43,
        0,0,117,22,1,0,0,0,118,119,5,45,0,0,119,24,1,0,0,0,120,121,5,42,
        0,0,121,26,1,0,0,0,122,123,5,47,0,0,123,28,1,0,0,0,124,125,5,61,
        0,0,125,30,1,0,0,0,126,127,5,61,0,0,127,128,5,61,0,0,128,32,1,0,
        0,0,129,130,5,33,0,0,130,131,5,61,0,0,131,34,1,0,0,0,132,133,5,62,
        0,0,133,134,5,61,0,0,134,36,1,0,0,0,135,136,5,60,0,0,136,137,5,61,
        0,0,137,38,1,0,0,0,138,139,5,62,0,0,139,40,1,0,0,0,140,141,5,60,
        0,0,141,42,1,0,0,0,142,143,5,40,0,0,143,44,1,0,0,0,144,145,5,41,
        0,0,145,46,1,0,0,0,146,147,5,123,0,0,147,48,1,0,0,0,148,149,5,125,
        0,0,149,50,1,0,0,0,150,151,5,44,0,0,151,52,1,0,0,0,152,153,5,58,
        0,0,153,54,1,0,0,0,154,155,5,59,0,0,155,56,1,0,0,0,156,158,7,0,0,
        0,157,156,1,0,0,0,158,159,1,0,0,0,159,157,1,0,0,0,159,160,1,0,0,
        0,160,161,1,0,0,0,161,163,5,46,0,0,162,164,7,0,0,0,163,162,1,0,0,
        0,164,165,1,0,0,0,165,163,1,0,0,0,165,166,1,0,0,0,166,58,1,0,0,0,
        167,169,7,0,0,0,168,167,1,0,0,0,169,170,1,0,0,0,170,168,1,0,0,0,
        170,171,1,0,0,0,171,60,1,0,0,0,172,178,5,34,0,0,173,174,5,92,0,0,
        174,177,7,1,0,0,175,177,8,2,0,0,176,173,1,0,0,0,176,175,1,0,0,0,
        177,180,1,0,0,0,178,176,1,0,0,0,178,179,1,0,0,0,179,181,1,0,0,0,
        180,178,1,0,0,0,181,182,5,34,0,0,182,62,1,0,0,0,183,187,7,3,0,0,
        184,186,7,4,0,0,185,184,1,0,0,0,186,189,1,0,0,0,187,185,1,0,0,0,
        187,188,1,0,0,0,188,64,1,0,0,0,189,187,1,0,0,0,190,192,7,5,0,0,191,
        190,1,0,0,0,192,193,1,0,0,0,193,191,1,0,0,0,193,194,1,0,0,0,194,
        195,1,0,0,0,195,196,6,32,0,0,196,66,1,0,0,0,8,0,159,165,170,176,
        178,187,193,1,6,0,0
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
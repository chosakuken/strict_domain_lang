
import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";


export class BoQQILexer extends antlr.Lexer {
    public static readonly IF = 1;
    public static readonly ELSE = 2;
    public static readonly PLUS = 3;
    public static readonly MINUS = 4;
    public static readonly MUL = 5;
    public static readonly DIV = 6;
    public static readonly EQUAL = 7;
    public static readonly EQ = 8;
    public static readonly NE = 9;
    public static readonly GE = 10;
    public static readonly LE = 11;
    public static readonly GT = 12;
    public static readonly LT = 13;
    public static readonly LPAREN = 14;
    public static readonly RPAREN = 15;
    public static readonly LBRACE = 16;
    public static readonly RBRACE = 17;
    public static readonly COMMA = 18;
    public static readonly SEMI = 19;
    public static readonly FLOAT = 20;
    public static readonly INT = 21;
    public static readonly STRING = 22;
    public static readonly IDENT = 23;
    public static readonly WS = 24;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
        null, "'if'", "'else'", "'+'", "'-'", "'*'", "'/'", "'='", "'=='", 
        "'!='", "'>='", "'<='", "'>'", "'<'", "'('", "')'", "'{'", "'}'", 
        "','", "';'"
    ];

    public static readonly symbolicNames = [
        null, "IF", "ELSE", "PLUS", "MINUS", "MUL", "DIV", "EQUAL", "EQ", 
        "NE", "GE", "LE", "GT", "LT", "LPAREN", "RPAREN", "LBRACE", "RBRACE", 
        "COMMA", "SEMI", "FLOAT", "INT", "STRING", "IDENT", "WS"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "IF", "ELSE", "PLUS", "MINUS", "MUL", "DIV", "EQUAL", "EQ", "NE", 
        "GE", "LE", "GT", "LT", "LPAREN", "RPAREN", "LBRACE", "RBRACE", 
        "COMMA", "SEMI", "FLOAT", "INT", "STRING", "IDENT", "WS",
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
        4,0,24,136,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,
        2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,
        13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,
        19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,1,0,1,0,1,0,1,1,1,1,1,
        1,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,7,1,
        8,1,8,1,8,1,9,1,9,1,9,1,10,1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,
        13,1,14,1,14,1,15,1,15,1,16,1,16,1,17,1,17,1,18,1,18,1,19,4,19,97,
        8,19,11,19,12,19,98,1,19,1,19,4,19,103,8,19,11,19,12,19,104,1,20,
        4,20,108,8,20,11,20,12,20,109,1,21,1,21,1,21,1,21,5,21,116,8,21,
        10,21,12,21,119,9,21,1,21,1,21,1,22,1,22,5,22,125,8,22,10,22,12,
        22,128,9,22,1,23,4,23,131,8,23,11,23,12,23,132,1,23,1,23,0,0,24,
        1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,
        27,14,29,15,31,16,33,17,35,18,37,19,39,20,41,21,43,22,45,23,47,24,
        1,0,6,1,0,48,57,6,0,34,34,92,92,98,98,110,110,114,114,116,116,4,
        0,10,10,13,13,34,34,92,92,3,0,65,90,95,95,97,122,4,0,48,57,65,90,
        95,95,97,122,3,0,9,10,13,13,32,32,142,0,1,1,0,0,0,0,3,1,0,0,0,0,
        5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,
        1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,
        1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,
        1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,
        1,0,0,0,0,47,1,0,0,0,1,49,1,0,0,0,3,52,1,0,0,0,5,57,1,0,0,0,7,59,
        1,0,0,0,9,61,1,0,0,0,11,63,1,0,0,0,13,65,1,0,0,0,15,67,1,0,0,0,17,
        70,1,0,0,0,19,73,1,0,0,0,21,76,1,0,0,0,23,79,1,0,0,0,25,81,1,0,0,
        0,27,83,1,0,0,0,29,85,1,0,0,0,31,87,1,0,0,0,33,89,1,0,0,0,35,91,
        1,0,0,0,37,93,1,0,0,0,39,96,1,0,0,0,41,107,1,0,0,0,43,111,1,0,0,
        0,45,122,1,0,0,0,47,130,1,0,0,0,49,50,5,105,0,0,50,51,5,102,0,0,
        51,2,1,0,0,0,52,53,5,101,0,0,53,54,5,108,0,0,54,55,5,115,0,0,55,
        56,5,101,0,0,56,4,1,0,0,0,57,58,5,43,0,0,58,6,1,0,0,0,59,60,5,45,
        0,0,60,8,1,0,0,0,61,62,5,42,0,0,62,10,1,0,0,0,63,64,5,47,0,0,64,
        12,1,0,0,0,65,66,5,61,0,0,66,14,1,0,0,0,67,68,5,61,0,0,68,69,5,61,
        0,0,69,16,1,0,0,0,70,71,5,33,0,0,71,72,5,61,0,0,72,18,1,0,0,0,73,
        74,5,62,0,0,74,75,5,61,0,0,75,20,1,0,0,0,76,77,5,60,0,0,77,78,5,
        61,0,0,78,22,1,0,0,0,79,80,5,62,0,0,80,24,1,0,0,0,81,82,5,60,0,0,
        82,26,1,0,0,0,83,84,5,40,0,0,84,28,1,0,0,0,85,86,5,41,0,0,86,30,
        1,0,0,0,87,88,5,123,0,0,88,32,1,0,0,0,89,90,5,125,0,0,90,34,1,0,
        0,0,91,92,5,44,0,0,92,36,1,0,0,0,93,94,5,59,0,0,94,38,1,0,0,0,95,
        97,7,0,0,0,96,95,1,0,0,0,97,98,1,0,0,0,98,96,1,0,0,0,98,99,1,0,0,
        0,99,100,1,0,0,0,100,102,5,46,0,0,101,103,7,0,0,0,102,101,1,0,0,
        0,103,104,1,0,0,0,104,102,1,0,0,0,104,105,1,0,0,0,105,40,1,0,0,0,
        106,108,7,0,0,0,107,106,1,0,0,0,108,109,1,0,0,0,109,107,1,0,0,0,
        109,110,1,0,0,0,110,42,1,0,0,0,111,117,5,34,0,0,112,113,5,92,0,0,
        113,116,7,1,0,0,114,116,8,2,0,0,115,112,1,0,0,0,115,114,1,0,0,0,
        116,119,1,0,0,0,117,115,1,0,0,0,117,118,1,0,0,0,118,120,1,0,0,0,
        119,117,1,0,0,0,120,121,5,34,0,0,121,44,1,0,0,0,122,126,7,3,0,0,
        123,125,7,4,0,0,124,123,1,0,0,0,125,128,1,0,0,0,126,124,1,0,0,0,
        126,127,1,0,0,0,127,46,1,0,0,0,128,126,1,0,0,0,129,131,7,5,0,0,130,
        129,1,0,0,0,131,132,1,0,0,0,132,130,1,0,0,0,132,133,1,0,0,0,133,
        134,1,0,0,0,134,135,6,23,0,0,135,48,1,0,0,0,8,0,98,104,109,115,117,
        126,132,1,6,0,0
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
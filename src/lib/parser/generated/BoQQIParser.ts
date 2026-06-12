
import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { BoQQIParserListener } from "./BoQQIParserListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class BoQQIParser extends antlr.Parser {
    public static readonly IF = 1;
    public static readonly ELSE = 2;
    public static readonly TYPE_INT = 3;
    public static readonly TYPE_FLOAT = 4;
    public static readonly TYPE_STRING = 5;
    public static readonly PLUS = 6;
    public static readonly MINUS = 7;
    public static readonly MUL = 8;
    public static readonly DIV = 9;
    public static readonly EQUAL = 10;
    public static readonly EQ = 11;
    public static readonly NE = 12;
    public static readonly GE = 13;
    public static readonly LE = 14;
    public static readonly GT = 15;
    public static readonly LT = 16;
    public static readonly LPAREN = 17;
    public static readonly RPAREN = 18;
    public static readonly LBRACE = 19;
    public static readonly RBRACE = 20;
    public static readonly COMMA = 21;
    public static readonly SEMI = 22;
    public static readonly FLOAT = 23;
    public static readonly INT = 24;
    public static readonly STRING = 25;
    public static readonly IDENT = 26;
    public static readonly WS = 27;
    public static readonly RULE_program = 0;
    public static readonly RULE_statement = 1;
    public static readonly RULE_if = 2;
    public static readonly RULE_declare = 3;
    public static readonly RULE_assign = 4;
    public static readonly RULE_type = 5;
    public static readonly RULE_expr = 6;
    public static readonly RULE_call = 7;
    public static readonly RULE_args = 8;

    public static readonly literalNames = [
        null, "'if'", "'else'", "'int'", "'float'", "'string'", "'+'", "'-'", 
        "'*'", "'/'", "'='", "'=='", "'!='", "'>='", "'<='", "'>'", "'<'", 
        "'('", "')'", "'{'", "'}'", "','", "';'"
    ];

    public static readonly symbolicNames = [
        null, "IF", "ELSE", "TYPE_INT", "TYPE_FLOAT", "TYPE_STRING", "PLUS", 
        "MINUS", "MUL", "DIV", "EQUAL", "EQ", "NE", "GE", "LE", "GT", "LT", 
        "LPAREN", "RPAREN", "LBRACE", "RBRACE", "COMMA", "SEMI", "FLOAT", 
        "INT", "STRING", "IDENT", "WS"
    ];
    public static readonly ruleNames = [
        "program", "statement", "if", "declare", "assign", "type", "expr", 
        "call", "args",
    ];

    public get grammarFileName(): string { return "BoQQIParser.g4"; }
    public get literalNames(): (string | null)[] { return BoQQIParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return BoQQIParser.symbolicNames; }
    public get ruleNames(): string[] { return BoQQIParser.ruleNames; }
    public get serializedATN(): number[] { return BoQQIParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, BoQQIParser._ATN, BoQQIParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public program(): ProgramContext {
        let localContext = new ProgramContext(this.context, this.state);
        this.enterRule(localContext, 0, BoQQIParser.RULE_program);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 21;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67108922) !== 0)) {
                {
                {
                this.state = 18;
                this.statement();
                }
                }
                this.state = 23;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 24;
            this.match(BoQQIParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public statement(): StatementContext {
        let localContext = new StatementContext(this.context, this.state);
        this.enterRule(localContext, 2, BoQQIParser.RULE_statement);
        try {
            this.state = 36;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 1, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 26;
                this.if_();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 27;
                this.call();
                this.state = 28;
                this.match(BoQQIParser.SEMI);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 30;
                this.declare_();
                this.state = 31;
                this.match(BoQQIParser.SEMI);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 33;
                this.assign();
                this.state = 34;
                this.match(BoQQIParser.SEMI);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public if_(): IfContext {
        let localContext = new IfContext(this.context, this.state);
        this.enterRule(localContext, 4, BoQQIParser.RULE_if);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 38;
            this.match(BoQQIParser.IF);
            this.state = 39;
            this.match(BoQQIParser.LPAREN);
            this.state = 40;
            this.expr(0);
            this.state = 41;
            this.match(BoQQIParser.RPAREN);
            this.state = 42;
            this.match(BoQQIParser.LBRACE);
            this.state = 46;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67108922) !== 0)) {
                {
                {
                this.state = 43;
                this.statement();
                }
                }
                this.state = 48;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 49;
            this.match(BoQQIParser.RBRACE);
            this.state = 59;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 2) {
                {
                this.state = 50;
                this.match(BoQQIParser.ELSE);
                this.state = 51;
                this.match(BoQQIParser.LBRACE);
                this.state = 55;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67108922) !== 0)) {
                    {
                    {
                    this.state = 52;
                    this.statement();
                    }
                    }
                    this.state = 57;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 58;
                this.match(BoQQIParser.RBRACE);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public declare_(): DeclareContext {
        let localContext = new DeclareContext(this.context, this.state);
        this.enterRule(localContext, 6, BoQQIParser.RULE_declare);
        try {
            this.state = 69;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 5, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 61;
                this.type_();
                this.state = 62;
                this.match(BoQQIParser.IDENT);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 64;
                this.type_();
                this.state = 65;
                this.match(BoQQIParser.IDENT);
                this.state = 66;
                this.match(BoQQIParser.EQUAL);
                this.state = 67;
                this.expr(0);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public assign(): AssignContext {
        let localContext = new AssignContext(this.context, this.state);
        this.enterRule(localContext, 8, BoQQIParser.RULE_assign);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 71;
            this.match(BoQQIParser.IDENT);
            this.state = 72;
            this.match(BoQQIParser.EQUAL);
            this.state = 73;
            this.expr(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public type_(): TypeContext {
        let localContext = new TypeContext(this.context, this.state);
        this.enterRule(localContext, 10, BoQQIParser.RULE_type);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 75;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 56) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public expr(): ExprContext;
    public expr(_p: number): ExprContext;
    public expr(_p?: number): ExprContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ExprContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 12;
        this.enterRecursionRule(localContext, 12, BoQQIParser.RULE_expr, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 86;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case BoQQIParser.LPAREN:
                {
                localContext = new ParensContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 78;
                this.match(BoQQIParser.LPAREN);
                this.state = 79;
                this.expr(0);
                this.state = 80;
                this.match(BoQQIParser.RPAREN);
                }
                break;
            case BoQQIParser.FLOAT:
                {
                localContext = new FloatContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 82;
                this.match(BoQQIParser.FLOAT);
                }
                break;
            case BoQQIParser.INT:
                {
                localContext = new IntContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 83;
                this.match(BoQQIParser.INT);
                }
                break;
            case BoQQIParser.STRING:
                {
                localContext = new StringContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 84;
                this.match(BoQQIParser.STRING);
                }
                break;
            case BoQQIParser.IDENT:
                {
                localContext = new VarContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 85;
                this.match(BoQQIParser.IDENT);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 102;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 8, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 100;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 7, this.context) ) {
                    case 1:
                        {
                        localContext = new MulDivContext(new ExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, BoQQIParser.RULE_expr);
                        this.state = 88;
                        if (!(this.precpred(this.context, 9))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 9)");
                        }
                        this.state = 89;
                        (localContext as MulDivContext)._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 8 || _la === 9)) {
                            (localContext as MulDivContext)._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 90;
                        this.expr(10);
                        }
                        break;
                    case 2:
                        {
                        localContext = new AddSubContext(new ExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, BoQQIParser.RULE_expr);
                        this.state = 91;
                        if (!(this.precpred(this.context, 8))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 8)");
                        }
                        this.state = 92;
                        (localContext as AddSubContext)._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 6 || _la === 7)) {
                            (localContext as AddSubContext)._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 93;
                        this.expr(9);
                        }
                        break;
                    case 3:
                        {
                        localContext = new CompContext(new ExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, BoQQIParser.RULE_expr);
                        this.state = 94;
                        if (!(this.precpred(this.context, 7))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 7)");
                        }
                        this.state = 95;
                        (localContext as CompContext)._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 122880) !== 0))) {
                            (localContext as CompContext)._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 96;
                        this.expr(8);
                        }
                        break;
                    case 4:
                        {
                        localContext = new EqContext(new ExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, BoQQIParser.RULE_expr);
                        this.state = 97;
                        if (!(this.precpred(this.context, 6))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 6)");
                        }
                        this.state = 98;
                        (localContext as EqContext)._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 11 || _la === 12)) {
                            (localContext as EqContext)._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 99;
                        this.expr(7);
                        }
                        break;
                    }
                    }
                }
                this.state = 104;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 8, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public call(): CallContext {
        let localContext = new CallContext(this.context, this.state);
        this.enterRule(localContext, 14, BoQQIParser.RULE_call);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 105;
            this.match(BoQQIParser.IDENT);
            this.state = 106;
            this.match(BoQQIParser.LPAREN);
            this.state = 107;
            this.args();
            this.state = 108;
            this.match(BoQQIParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public args(): ArgsContext {
        let localContext = new ArgsContext(this.context, this.state);
        this.enterRule(localContext, 16, BoQQIParser.RULE_args);
        let _la: number;
        try {
            this.state = 119;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case BoQQIParser.LPAREN:
            case BoQQIParser.FLOAT:
            case BoQQIParser.INT:
            case BoQQIParser.STRING:
            case BoQQIParser.IDENT:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 110;
                this.expr(0);
                this.state = 115;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 21) {
                    {
                    {
                    this.state = 111;
                    this.match(BoQQIParser.COMMA);
                    this.state = 112;
                    this.expr(0);
                    }
                    }
                    this.state = 117;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
                break;
            case BoQQIParser.RPAREN:
                this.enterOuterAlt(localContext, 2);
                // tslint:disable-next-line:no-empty
                {
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public override sempred(localContext: antlr.ParserRuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 6:
            return this.expr_sempred(localContext as ExprContext, predIndex);
        }
        return true;
    }
    private expr_sempred(localContext: ExprContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 9);
        case 1:
            return this.precpred(this.context, 8);
        case 2:
            return this.precpred(this.context, 7);
        case 3:
            return this.precpred(this.context, 6);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,27,122,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,1,0,5,0,20,8,0,10,0,12,0,23,9,0,1,0,1,0,1,1,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,37,8,1,1,2,1,2,1,2,1,2,1,2,
        1,2,5,2,45,8,2,10,2,12,2,48,9,2,1,2,1,2,1,2,1,2,5,2,54,8,2,10,2,
        12,2,57,9,2,1,2,3,2,60,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,70,
        8,3,1,4,1,4,1,4,1,4,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,
        3,6,87,8,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,5,6,101,
        8,6,10,6,12,6,104,9,6,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,5,8,114,8,
        8,10,8,12,8,117,9,8,1,8,3,8,120,8,8,1,8,0,1,12,9,0,2,4,6,8,10,12,
        14,16,0,5,1,0,3,5,1,0,8,9,1,0,6,7,1,0,13,16,1,0,11,12,130,0,21,1,
        0,0,0,2,36,1,0,0,0,4,38,1,0,0,0,6,69,1,0,0,0,8,71,1,0,0,0,10,75,
        1,0,0,0,12,86,1,0,0,0,14,105,1,0,0,0,16,119,1,0,0,0,18,20,3,2,1,
        0,19,18,1,0,0,0,20,23,1,0,0,0,21,19,1,0,0,0,21,22,1,0,0,0,22,24,
        1,0,0,0,23,21,1,0,0,0,24,25,5,0,0,1,25,1,1,0,0,0,26,37,3,4,2,0,27,
        28,3,14,7,0,28,29,5,22,0,0,29,37,1,0,0,0,30,31,3,6,3,0,31,32,5,22,
        0,0,32,37,1,0,0,0,33,34,3,8,4,0,34,35,5,22,0,0,35,37,1,0,0,0,36,
        26,1,0,0,0,36,27,1,0,0,0,36,30,1,0,0,0,36,33,1,0,0,0,37,3,1,0,0,
        0,38,39,5,1,0,0,39,40,5,17,0,0,40,41,3,12,6,0,41,42,5,18,0,0,42,
        46,5,19,0,0,43,45,3,2,1,0,44,43,1,0,0,0,45,48,1,0,0,0,46,44,1,0,
        0,0,46,47,1,0,0,0,47,49,1,0,0,0,48,46,1,0,0,0,49,59,5,20,0,0,50,
        51,5,2,0,0,51,55,5,19,0,0,52,54,3,2,1,0,53,52,1,0,0,0,54,57,1,0,
        0,0,55,53,1,0,0,0,55,56,1,0,0,0,56,58,1,0,0,0,57,55,1,0,0,0,58,60,
        5,20,0,0,59,50,1,0,0,0,59,60,1,0,0,0,60,5,1,0,0,0,61,62,3,10,5,0,
        62,63,5,26,0,0,63,70,1,0,0,0,64,65,3,10,5,0,65,66,5,26,0,0,66,67,
        5,10,0,0,67,68,3,12,6,0,68,70,1,0,0,0,69,61,1,0,0,0,69,64,1,0,0,
        0,70,7,1,0,0,0,71,72,5,26,0,0,72,73,5,10,0,0,73,74,3,12,6,0,74,9,
        1,0,0,0,75,76,7,0,0,0,76,11,1,0,0,0,77,78,6,6,-1,0,78,79,5,17,0,
        0,79,80,3,12,6,0,80,81,5,18,0,0,81,87,1,0,0,0,82,87,5,23,0,0,83,
        87,5,24,0,0,84,87,5,25,0,0,85,87,5,26,0,0,86,77,1,0,0,0,86,82,1,
        0,0,0,86,83,1,0,0,0,86,84,1,0,0,0,86,85,1,0,0,0,87,102,1,0,0,0,88,
        89,10,9,0,0,89,90,7,1,0,0,90,101,3,12,6,10,91,92,10,8,0,0,92,93,
        7,2,0,0,93,101,3,12,6,9,94,95,10,7,0,0,95,96,7,3,0,0,96,101,3,12,
        6,8,97,98,10,6,0,0,98,99,7,4,0,0,99,101,3,12,6,7,100,88,1,0,0,0,
        100,91,1,0,0,0,100,94,1,0,0,0,100,97,1,0,0,0,101,104,1,0,0,0,102,
        100,1,0,0,0,102,103,1,0,0,0,103,13,1,0,0,0,104,102,1,0,0,0,105,106,
        5,26,0,0,106,107,5,17,0,0,107,108,3,16,8,0,108,109,5,18,0,0,109,
        15,1,0,0,0,110,115,3,12,6,0,111,112,5,21,0,0,112,114,3,12,6,0,113,
        111,1,0,0,0,114,117,1,0,0,0,115,113,1,0,0,0,115,116,1,0,0,0,116,
        120,1,0,0,0,117,115,1,0,0,0,118,120,1,0,0,0,119,110,1,0,0,0,119,
        118,1,0,0,0,120,17,1,0,0,0,11,21,36,46,55,59,69,86,100,102,115,119
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!BoQQIParser.__ATN) {
            BoQQIParser.__ATN = new antlr.ATNDeserializer().deserialize(BoQQIParser._serializedATN);
        }

        return BoQQIParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(BoQQIParser.literalNames, BoQQIParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return BoQQIParser.vocabulary;
    }

    private static readonly decisionsToDFA = BoQQIParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class ProgramContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(BoQQIParser.EOF, 0)!;
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public override get ruleIndex(): number {
        return BoQQIParser.RULE_program;
    }
    public override enterRule(listener: BoQQIParserListener): void {
        if(listener.enterProgram) {
             listener.enterProgram(this);
        }
    }
    public override exitRule(listener: BoQQIParserListener): void {
        if(listener.exitProgram) {
             listener.exitProgram(this);
        }
    }
}


export class StatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public if(): IfContext | null {
        return this.getRuleContext(0, IfContext);
    }
    public call(): CallContext | null {
        return this.getRuleContext(0, CallContext);
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(BoQQIParser.SEMI, 0);
    }
    public declare(): DeclareContext | null {
        return this.getRuleContext(0, DeclareContext);
    }
    public assign(): AssignContext | null {
        return this.getRuleContext(0, AssignContext);
    }
    public override get ruleIndex(): number {
        return BoQQIParser.RULE_statement;
    }
    public override enterRule(listener: BoQQIParserListener): void {
        if(listener.enterStatement) {
             listener.enterStatement(this);
        }
    }
    public override exitRule(listener: BoQQIParserListener): void {
        if(listener.exitStatement) {
             listener.exitStatement(this);
        }
    }
}


export class IfContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IF(): antlr.TerminalNode {
        return this.getToken(BoQQIParser.IF, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(BoQQIParser.LPAREN, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(BoQQIParser.RPAREN, 0)!;
    }
    public LBRACE(): antlr.TerminalNode[];
    public LBRACE(i: number): antlr.TerminalNode | null;
    public LBRACE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(BoQQIParser.LBRACE);
    	} else {
    		return this.getToken(BoQQIParser.LBRACE, i);
    	}
    }
    public RBRACE(): antlr.TerminalNode[];
    public RBRACE(i: number): antlr.TerminalNode | null;
    public RBRACE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(BoQQIParser.RBRACE);
    	} else {
    		return this.getToken(BoQQIParser.RBRACE, i);
    	}
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public ELSE(): antlr.TerminalNode | null {
        return this.getToken(BoQQIParser.ELSE, 0);
    }
    public override get ruleIndex(): number {
        return BoQQIParser.RULE_if;
    }
    public override enterRule(listener: BoQQIParserListener): void {
        if(listener.enterIf) {
             listener.enterIf(this);
        }
    }
    public override exitRule(listener: BoQQIParserListener): void {
        if(listener.exitIf) {
             listener.exitIf(this);
        }
    }
}


export class DeclareContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public type(): TypeContext {
        return this.getRuleContext(0, TypeContext)!;
    }
    public IDENT(): antlr.TerminalNode {
        return this.getToken(BoQQIParser.IDENT, 0)!;
    }
    public EQUAL(): antlr.TerminalNode | null {
        return this.getToken(BoQQIParser.EQUAL, 0);
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public override get ruleIndex(): number {
        return BoQQIParser.RULE_declare;
    }
    public override enterRule(listener: BoQQIParserListener): void {
        if(listener.enterDeclare) {
             listener.enterDeclare(this);
        }
    }
    public override exitRule(listener: BoQQIParserListener): void {
        if(listener.exitDeclare) {
             listener.exitDeclare(this);
        }
    }
}


export class AssignContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENT(): antlr.TerminalNode {
        return this.getToken(BoQQIParser.IDENT, 0)!;
    }
    public EQUAL(): antlr.TerminalNode {
        return this.getToken(BoQQIParser.EQUAL, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public override get ruleIndex(): number {
        return BoQQIParser.RULE_assign;
    }
    public override enterRule(listener: BoQQIParserListener): void {
        if(listener.enterAssign) {
             listener.enterAssign(this);
        }
    }
    public override exitRule(listener: BoQQIParserListener): void {
        if(listener.exitAssign) {
             listener.exitAssign(this);
        }
    }
}


export class TypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TYPE_INT(): antlr.TerminalNode | null {
        return this.getToken(BoQQIParser.TYPE_INT, 0);
    }
    public TYPE_FLOAT(): antlr.TerminalNode | null {
        return this.getToken(BoQQIParser.TYPE_FLOAT, 0);
    }
    public TYPE_STRING(): antlr.TerminalNode | null {
        return this.getToken(BoQQIParser.TYPE_STRING, 0);
    }
    public override get ruleIndex(): number {
        return BoQQIParser.RULE_type;
    }
    public override enterRule(listener: BoQQIParserListener): void {
        if(listener.enterType) {
             listener.enterType(this);
        }
    }
    public override exitRule(listener: BoQQIParserListener): void {
        if(listener.exitType) {
             listener.exitType(this);
        }
    }
}


export class ExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return BoQQIParser.RULE_expr;
    }
    public override copyFrom(ctx: ExprContext): void {
        super.copyFrom(ctx);
    }
}
export class ParensContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(BoQQIParser.LPAREN, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(BoQQIParser.RPAREN, 0)!;
    }
    public override enterRule(listener: BoQQIParserListener): void {
        if(listener.enterParens) {
             listener.enterParens(this);
        }
    }
    public override exitRule(listener: BoQQIParserListener): void {
        if(listener.exitParens) {
             listener.exitParens(this);
        }
    }
}
export class FloatContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public FLOAT(): antlr.TerminalNode {
        return this.getToken(BoQQIParser.FLOAT, 0)!;
    }
    public override enterRule(listener: BoQQIParserListener): void {
        if(listener.enterFloat) {
             listener.enterFloat(this);
        }
    }
    public override exitRule(listener: BoQQIParserListener): void {
        if(listener.exitFloat) {
             listener.exitFloat(this);
        }
    }
}
export class IntContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public INT(): antlr.TerminalNode {
        return this.getToken(BoQQIParser.INT, 0)!;
    }
    public override enterRule(listener: BoQQIParserListener): void {
        if(listener.enterInt) {
             listener.enterInt(this);
        }
    }
    public override exitRule(listener: BoQQIParserListener): void {
        if(listener.exitInt) {
             listener.exitInt(this);
        }
    }
}
export class StringContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public STRING(): antlr.TerminalNode {
        return this.getToken(BoQQIParser.STRING, 0)!;
    }
    public override enterRule(listener: BoQQIParserListener): void {
        if(listener.enterString) {
             listener.enterString(this);
        }
    }
    public override exitRule(listener: BoQQIParserListener): void {
        if(listener.exitString) {
             listener.exitString(this);
        }
    }
}
export class VarContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public IDENT(): antlr.TerminalNode {
        return this.getToken(BoQQIParser.IDENT, 0)!;
    }
    public override enterRule(listener: BoQQIParserListener): void {
        if(listener.enterVar) {
             listener.enterVar(this);
        }
    }
    public override exitRule(listener: BoQQIParserListener): void {
        if(listener.exitVar) {
             listener.exitVar(this);
        }
    }
}
export class MulDivContext extends ExprContext {
    public _op?: Token | null;
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public MUL(): antlr.TerminalNode | null {
        return this.getToken(BoQQIParser.MUL, 0);
    }
    public DIV(): antlr.TerminalNode | null {
        return this.getToken(BoQQIParser.DIV, 0);
    }
    public override enterRule(listener: BoQQIParserListener): void {
        if(listener.enterMulDiv) {
             listener.enterMulDiv(this);
        }
    }
    public override exitRule(listener: BoQQIParserListener): void {
        if(listener.exitMulDiv) {
             listener.exitMulDiv(this);
        }
    }
}
export class AddSubContext extends ExprContext {
    public _op?: Token | null;
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(BoQQIParser.PLUS, 0);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(BoQQIParser.MINUS, 0);
    }
    public override enterRule(listener: BoQQIParserListener): void {
        if(listener.enterAddSub) {
             listener.enterAddSub(this);
        }
    }
    public override exitRule(listener: BoQQIParserListener): void {
        if(listener.exitAddSub) {
             listener.exitAddSub(this);
        }
    }
}
export class CompContext extends ExprContext {
    public _op?: Token | null;
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public GE(): antlr.TerminalNode | null {
        return this.getToken(BoQQIParser.GE, 0);
    }
    public LE(): antlr.TerminalNode | null {
        return this.getToken(BoQQIParser.LE, 0);
    }
    public GT(): antlr.TerminalNode | null {
        return this.getToken(BoQQIParser.GT, 0);
    }
    public LT(): antlr.TerminalNode | null {
        return this.getToken(BoQQIParser.LT, 0);
    }
    public override enterRule(listener: BoQQIParserListener): void {
        if(listener.enterComp) {
             listener.enterComp(this);
        }
    }
    public override exitRule(listener: BoQQIParserListener): void {
        if(listener.exitComp) {
             listener.exitComp(this);
        }
    }
}
export class EqContext extends ExprContext {
    public _op?: Token | null;
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public EQ(): antlr.TerminalNode | null {
        return this.getToken(BoQQIParser.EQ, 0);
    }
    public NE(): antlr.TerminalNode | null {
        return this.getToken(BoQQIParser.NE, 0);
    }
    public override enterRule(listener: BoQQIParserListener): void {
        if(listener.enterEq) {
             listener.enterEq(this);
        }
    }
    public override exitRule(listener: BoQQIParserListener): void {
        if(listener.exitEq) {
             listener.exitEq(this);
        }
    }
}


export class CallContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENT(): antlr.TerminalNode {
        return this.getToken(BoQQIParser.IDENT, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(BoQQIParser.LPAREN, 0)!;
    }
    public args(): ArgsContext {
        return this.getRuleContext(0, ArgsContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(BoQQIParser.RPAREN, 0)!;
    }
    public override get ruleIndex(): number {
        return BoQQIParser.RULE_call;
    }
    public override enterRule(listener: BoQQIParserListener): void {
        if(listener.enterCall) {
             listener.enterCall(this);
        }
    }
    public override exitRule(listener: BoQQIParserListener): void {
        if(listener.exitCall) {
             listener.exitCall(this);
        }
    }
}


export class ArgsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(BoQQIParser.COMMA);
    	} else {
    		return this.getToken(BoQQIParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return BoQQIParser.RULE_args;
    }
    public override enterRule(listener: BoQQIParserListener): void {
        if(listener.enterArgs) {
             listener.enterArgs(this);
        }
    }
    public override exitRule(listener: BoQQIParserListener): void {
        if(listener.exitArgs) {
             listener.exitArgs(this);
        }
    }
}

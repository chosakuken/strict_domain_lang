
import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { BoQQIParserListener } from "./BoQQIParserListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class BoQQIParser extends antlr.Parser {
    public static readonly IF = 1;
    public static readonly ELSE = 2;
    public static readonly TRUE = 3;
    public static readonly FALSE = 4;
    public static readonly TYPE_INT = 5;
    public static readonly TYPE_FLOAT = 6;
    public static readonly TYPE_STRING = 7;
    public static readonly TYPE_BOOL = 8;
    public static readonly PLUS = 9;
    public static readonly MINUS = 10;
    public static readonly MUL = 11;
    public static readonly DIV = 12;
    public static readonly EQUAL = 13;
    public static readonly EQ = 14;
    public static readonly NE = 15;
    public static readonly GE = 16;
    public static readonly LE = 17;
    public static readonly GT = 18;
    public static readonly LT = 19;
    public static readonly LPAREN = 20;
    public static readonly RPAREN = 21;
    public static readonly LBRACE = 22;
    public static readonly RBRACE = 23;
    public static readonly COMMA = 24;
    public static readonly SEMI = 25;
    public static readonly FLOAT = 26;
    public static readonly INT = 27;
    public static readonly STRING = 28;
    public static readonly IDENT = 29;
    public static readonly WS = 30;
    public static readonly RULE_program = 0;
    public static readonly RULE_statement = 1;
    public static readonly RULE_if = 2;
    public static readonly RULE_call = 3;
    public static readonly RULE_args = 4;
    public static readonly RULE_declare = 5;
    public static readonly RULE_assign = 6;
    public static readonly RULE_type = 7;
    public static readonly RULE_expr = 8;
    public static readonly RULE_boolean = 9;

    public static readonly literalNames = [
        null, "'if'", "'else'", "'true'", "'false'", "'int'", "'float'", 
        "'string'", "'bool'", "'+'", "'-'", "'*'", "'/'", "'='", "'=='", 
        "'!='", "'>='", "'<='", "'>'", "'<'", "'('", "')'", "'{'", "'}'", 
        "','", "';'"
    ];

    public static readonly symbolicNames = [
        null, "IF", "ELSE", "TRUE", "FALSE", "TYPE_INT", "TYPE_FLOAT", "TYPE_STRING", 
        "TYPE_BOOL", "PLUS", "MINUS", "MUL", "DIV", "EQUAL", "EQ", "NE", 
        "GE", "LE", "GT", "LT", "LPAREN", "RPAREN", "LBRACE", "RBRACE", 
        "COMMA", "SEMI", "FLOAT", "INT", "STRING", "IDENT", "WS"
    ];
    public static readonly ruleNames = [
        "program", "statement", "if", "call", "args", "declare", "assign", 
        "type", "expr", "boolean",
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
            this.state = 23;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 536871394) !== 0)) {
                {
                {
                this.state = 20;
                this.statement();
                }
                }
                this.state = 25;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 26;
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
            this.state = 38;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 1, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 28;
                this.if_();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 29;
                this.call();
                this.state = 30;
                this.match(BoQQIParser.SEMI);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 32;
                this.declare_();
                this.state = 33;
                this.match(BoQQIParser.SEMI);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 35;
                this.assign();
                this.state = 36;
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
            this.state = 40;
            this.match(BoQQIParser.IF);
            this.state = 41;
            this.match(BoQQIParser.LPAREN);
            this.state = 42;
            this.expr(0);
            this.state = 43;
            this.match(BoQQIParser.RPAREN);
            this.state = 44;
            this.match(BoQQIParser.LBRACE);
            this.state = 48;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 536871394) !== 0)) {
                {
                {
                this.state = 45;
                this.statement();
                }
                }
                this.state = 50;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 51;
            this.match(BoQQIParser.RBRACE);
            this.state = 61;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 2) {
                {
                this.state = 52;
                this.match(BoQQIParser.ELSE);
                this.state = 53;
                this.match(BoQQIParser.LBRACE);
                this.state = 57;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 536871394) !== 0)) {
                    {
                    {
                    this.state = 54;
                    this.statement();
                    }
                    }
                    this.state = 59;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 60;
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
    public call(): CallContext {
        let localContext = new CallContext(this.context, this.state);
        this.enterRule(localContext, 6, BoQQIParser.RULE_call);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 63;
            this.match(BoQQIParser.IDENT);
            this.state = 64;
            this.match(BoQQIParser.LPAREN);
            this.state = 65;
            this.args();
            this.state = 66;
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
        this.enterRule(localContext, 8, BoQQIParser.RULE_args);
        let _la: number;
        try {
            this.state = 77;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case BoQQIParser.TRUE:
            case BoQQIParser.FALSE:
            case BoQQIParser.LPAREN:
            case BoQQIParser.FLOAT:
            case BoQQIParser.INT:
            case BoQQIParser.STRING:
            case BoQQIParser.IDENT:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 68;
                this.expr(0);
                this.state = 73;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 24) {
                    {
                    {
                    this.state = 69;
                    this.match(BoQQIParser.COMMA);
                    this.state = 70;
                    this.expr(0);
                    }
                    }
                    this.state = 75;
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
    public declare_(): DeclareContext {
        let localContext = new DeclareContext(this.context, this.state);
        this.enterRule(localContext, 10, BoQQIParser.RULE_declare);
        try {
            this.state = 87;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 7, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 79;
                this.type_();
                this.state = 80;
                this.match(BoQQIParser.IDENT);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 82;
                this.type_();
                this.state = 83;
                this.match(BoQQIParser.IDENT);
                this.state = 84;
                this.match(BoQQIParser.EQUAL);
                this.state = 85;
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
        this.enterRule(localContext, 12, BoQQIParser.RULE_assign);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 89;
            this.match(BoQQIParser.IDENT);
            this.state = 90;
            this.match(BoQQIParser.EQUAL);
            this.state = 91;
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
        this.enterRule(localContext, 14, BoQQIParser.RULE_type);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 93;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 480) !== 0))) {
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
        let _startState = 16;
        this.enterRecursionRule(localContext, 16, BoQQIParser.RULE_expr, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 105;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case BoQQIParser.LPAREN:
                {
                localContext = new ParensContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 96;
                this.match(BoQQIParser.LPAREN);
                this.state = 97;
                this.expr(0);
                this.state = 98;
                this.match(BoQQIParser.RPAREN);
                }
                break;
            case BoQQIParser.FLOAT:
                {
                localContext = new FloatContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 100;
                this.match(BoQQIParser.FLOAT);
                }
                break;
            case BoQQIParser.INT:
                {
                localContext = new IntContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 101;
                this.match(BoQQIParser.INT);
                }
                break;
            case BoQQIParser.STRING:
                {
                localContext = new StringContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 102;
                this.match(BoQQIParser.STRING);
                }
                break;
            case BoQQIParser.TRUE:
            case BoQQIParser.FALSE:
                {
                localContext = new BoolContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 103;
                this.boolean_();
                }
                break;
            case BoQQIParser.IDENT:
                {
                localContext = new VarContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 104;
                this.match(BoQQIParser.IDENT);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 121;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 10, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 119;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 9, this.context) ) {
                    case 1:
                        {
                        localContext = new MulDivContext(new ExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, BoQQIParser.RULE_expr);
                        this.state = 107;
                        if (!(this.precpred(this.context, 10))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 10)");
                        }
                        this.state = 108;
                        (localContext as MulDivContext)._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 11 || _la === 12)) {
                            (localContext as MulDivContext)._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 109;
                        this.expr(11);
                        }
                        break;
                    case 2:
                        {
                        localContext = new AddSubContext(new ExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, BoQQIParser.RULE_expr);
                        this.state = 110;
                        if (!(this.precpred(this.context, 9))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 9)");
                        }
                        this.state = 111;
                        (localContext as AddSubContext)._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 9 || _la === 10)) {
                            (localContext as AddSubContext)._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 112;
                        this.expr(10);
                        }
                        break;
                    case 3:
                        {
                        localContext = new CompContext(new ExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, BoQQIParser.RULE_expr);
                        this.state = 113;
                        if (!(this.precpred(this.context, 8))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 8)");
                        }
                        this.state = 114;
                        (localContext as CompContext)._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 983040) !== 0))) {
                            (localContext as CompContext)._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 115;
                        this.expr(9);
                        }
                        break;
                    case 4:
                        {
                        localContext = new EqContext(new ExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, BoQQIParser.RULE_expr);
                        this.state = 116;
                        if (!(this.precpred(this.context, 7))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 7)");
                        }
                        this.state = 117;
                        (localContext as EqContext)._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 14 || _la === 15)) {
                            (localContext as EqContext)._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 118;
                        this.expr(8);
                        }
                        break;
                    }
                    }
                }
                this.state = 123;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 10, this.context);
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
    public boolean_(): BooleanContext {
        let localContext = new BooleanContext(this.context, this.state);
        this.enterRule(localContext, 18, BoQQIParser.RULE_boolean);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 124;
            _la = this.tokenStream.LA(1);
            if(!(_la === 3 || _la === 4)) {
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

    public override sempred(localContext: antlr.ParserRuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 8:
            return this.expr_sempred(localContext as ExprContext, predIndex);
        }
        return true;
    }
    private expr_sempred(localContext: ExprContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 10);
        case 1:
            return this.precpred(this.context, 9);
        case 2:
            return this.precpred(this.context, 8);
        case 3:
            return this.precpred(this.context, 7);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,30,127,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,5,0,22,8,0,10,0,12,0,25,9,0,1,0,1,
        0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,39,8,1,1,2,1,2,1,2,
        1,2,1,2,1,2,5,2,47,8,2,10,2,12,2,50,9,2,1,2,1,2,1,2,1,2,5,2,56,8,
        2,10,2,12,2,59,9,2,1,2,3,2,62,8,2,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,
        4,5,4,72,8,4,10,4,12,4,75,9,4,1,4,3,4,78,8,4,1,5,1,5,1,5,1,5,1,5,
        1,5,1,5,1,5,3,5,88,8,5,1,6,1,6,1,6,1,6,1,7,1,7,1,8,1,8,1,8,1,8,1,
        8,1,8,1,8,1,8,1,8,1,8,3,8,106,8,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,
        8,1,8,1,8,1,8,1,8,5,8,120,8,8,10,8,12,8,123,9,8,1,9,1,9,1,9,0,1,
        16,10,0,2,4,6,8,10,12,14,16,18,0,6,1,0,5,8,1,0,11,12,1,0,9,10,1,
        0,16,19,1,0,14,15,1,0,3,4,135,0,23,1,0,0,0,2,38,1,0,0,0,4,40,1,0,
        0,0,6,63,1,0,0,0,8,77,1,0,0,0,10,87,1,0,0,0,12,89,1,0,0,0,14,93,
        1,0,0,0,16,105,1,0,0,0,18,124,1,0,0,0,20,22,3,2,1,0,21,20,1,0,0,
        0,22,25,1,0,0,0,23,21,1,0,0,0,23,24,1,0,0,0,24,26,1,0,0,0,25,23,
        1,0,0,0,26,27,5,0,0,1,27,1,1,0,0,0,28,39,3,4,2,0,29,30,3,6,3,0,30,
        31,5,25,0,0,31,39,1,0,0,0,32,33,3,10,5,0,33,34,5,25,0,0,34,39,1,
        0,0,0,35,36,3,12,6,0,36,37,5,25,0,0,37,39,1,0,0,0,38,28,1,0,0,0,
        38,29,1,0,0,0,38,32,1,0,0,0,38,35,1,0,0,0,39,3,1,0,0,0,40,41,5,1,
        0,0,41,42,5,20,0,0,42,43,3,16,8,0,43,44,5,21,0,0,44,48,5,22,0,0,
        45,47,3,2,1,0,46,45,1,0,0,0,47,50,1,0,0,0,48,46,1,0,0,0,48,49,1,
        0,0,0,49,51,1,0,0,0,50,48,1,0,0,0,51,61,5,23,0,0,52,53,5,2,0,0,53,
        57,5,22,0,0,54,56,3,2,1,0,55,54,1,0,0,0,56,59,1,0,0,0,57,55,1,0,
        0,0,57,58,1,0,0,0,58,60,1,0,0,0,59,57,1,0,0,0,60,62,5,23,0,0,61,
        52,1,0,0,0,61,62,1,0,0,0,62,5,1,0,0,0,63,64,5,29,0,0,64,65,5,20,
        0,0,65,66,3,8,4,0,66,67,5,21,0,0,67,7,1,0,0,0,68,73,3,16,8,0,69,
        70,5,24,0,0,70,72,3,16,8,0,71,69,1,0,0,0,72,75,1,0,0,0,73,71,1,0,
        0,0,73,74,1,0,0,0,74,78,1,0,0,0,75,73,1,0,0,0,76,78,1,0,0,0,77,68,
        1,0,0,0,77,76,1,0,0,0,78,9,1,0,0,0,79,80,3,14,7,0,80,81,5,29,0,0,
        81,88,1,0,0,0,82,83,3,14,7,0,83,84,5,29,0,0,84,85,5,13,0,0,85,86,
        3,16,8,0,86,88,1,0,0,0,87,79,1,0,0,0,87,82,1,0,0,0,88,11,1,0,0,0,
        89,90,5,29,0,0,90,91,5,13,0,0,91,92,3,16,8,0,92,13,1,0,0,0,93,94,
        7,0,0,0,94,15,1,0,0,0,95,96,6,8,-1,0,96,97,5,20,0,0,97,98,3,16,8,
        0,98,99,5,21,0,0,99,106,1,0,0,0,100,106,5,26,0,0,101,106,5,27,0,
        0,102,106,5,28,0,0,103,106,3,18,9,0,104,106,5,29,0,0,105,95,1,0,
        0,0,105,100,1,0,0,0,105,101,1,0,0,0,105,102,1,0,0,0,105,103,1,0,
        0,0,105,104,1,0,0,0,106,121,1,0,0,0,107,108,10,10,0,0,108,109,7,
        1,0,0,109,120,3,16,8,11,110,111,10,9,0,0,111,112,7,2,0,0,112,120,
        3,16,8,10,113,114,10,8,0,0,114,115,7,3,0,0,115,120,3,16,8,9,116,
        117,10,7,0,0,117,118,7,4,0,0,118,120,3,16,8,8,119,107,1,0,0,0,119,
        110,1,0,0,0,119,113,1,0,0,0,119,116,1,0,0,0,120,123,1,0,0,0,121,
        119,1,0,0,0,121,122,1,0,0,0,122,17,1,0,0,0,123,121,1,0,0,0,124,125,
        7,5,0,0,125,19,1,0,0,0,11,23,38,48,57,61,73,77,87,105,119,121
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
    public TYPE_BOOL(): antlr.TerminalNode | null {
        return this.getToken(BoQQIParser.TYPE_BOOL, 0);
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
export class BoolContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public boolean(): BooleanContext {
        return this.getRuleContext(0, BooleanContext)!;
    }
    public override enterRule(listener: BoQQIParserListener): void {
        if(listener.enterBool) {
             listener.enterBool(this);
        }
    }
    public override exitRule(listener: BoQQIParserListener): void {
        if(listener.exitBool) {
             listener.exitBool(this);
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


export class BooleanContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TRUE(): antlr.TerminalNode | null {
        return this.getToken(BoQQIParser.TRUE, 0);
    }
    public FALSE(): antlr.TerminalNode | null {
        return this.getToken(BoQQIParser.FALSE, 0);
    }
    public override get ruleIndex(): number {
        return BoQQIParser.RULE_boolean;
    }
    public override enterRule(listener: BoQQIParserListener): void {
        if(listener.enterBoolean) {
             listener.enterBoolean(this);
        }
    }
    public override exitRule(listener: BoQQIParserListener): void {
        if(listener.exitBoolean) {
             listener.exitBoolean(this);
        }
    }
}

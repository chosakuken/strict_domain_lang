
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
    public static readonly RULE_program = 0;
    public static readonly RULE_statement = 1;
    public static readonly RULE_if = 2;
    public static readonly RULE_call = 3;
    public static readonly RULE_args = 4;
    public static readonly RULE_declare = 5;
    public static readonly RULE_domain = 6;
    public static readonly RULE_assign = 7;
    public static readonly RULE_type = 8;
    public static readonly RULE_numericType = 9;
    public static readonly RULE_nonNumericType = 10;
    public static readonly RULE_expr = 11;
    public static readonly RULE_boolean = 12;

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
    public static readonly ruleNames = [
        "program", "statement", "if", "call", "args", "declare", "domain", 
        "assign", "type", "numericType", "nonNumericType", "expr", "boolean",
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
            this.state = 29;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 1)) & ~0x1F) === 0 && ((1 << (_la - 1)) & 2147484609) !== 0)) {
                {
                {
                this.state = 26;
                this.statement();
                }
                }
                this.state = 31;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 32;
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
            this.state = 44;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 1, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 34;
                this.if_();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 35;
                this.call();
                this.state = 36;
                this.match(BoQQIParser.SEMI);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 38;
                this.declare_();
                this.state = 39;
                this.match(BoQQIParser.SEMI);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 41;
                this.assign();
                this.state = 42;
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
            this.state = 46;
            this.match(BoQQIParser.IF);
            this.state = 47;
            this.match(BoQQIParser.LPAREN);
            this.state = 48;
            this.expr(0);
            this.state = 49;
            this.match(BoQQIParser.RPAREN);
            this.state = 50;
            this.match(BoQQIParser.LBRACE);
            this.state = 54;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 1)) & ~0x1F) === 0 && ((1 << (_la - 1)) & 2147484609) !== 0)) {
                {
                {
                this.state = 51;
                this.statement();
                }
                }
                this.state = 56;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 57;
            this.match(BoQQIParser.RBRACE);
            this.state = 67;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 2) {
                {
                this.state = 58;
                this.match(BoQQIParser.ELSE);
                this.state = 59;
                this.match(BoQQIParser.LBRACE);
                this.state = 63;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (((((_la - 1)) & ~0x1F) === 0 && ((1 << (_la - 1)) & 2147484609) !== 0)) {
                    {
                    {
                    this.state = 60;
                    this.statement();
                    }
                    }
                    this.state = 65;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 66;
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
            this.state = 69;
            this.match(BoQQIParser.IDENT);
            this.state = 70;
            this.match(BoQQIParser.LPAREN);
            this.state = 71;
            this.args();
            this.state = 72;
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
            this.state = 83;
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
                this.state = 74;
                this.expr(0);
                this.state = 79;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 26) {
                    {
                    {
                    this.state = 75;
                    this.match(BoQQIParser.COMMA);
                    this.state = 76;
                    this.expr(0);
                    }
                    }
                    this.state = 81;
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
            this.state = 103;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 7, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 85;
                this.numericType();
                this.state = 86;
                this.domain();
                this.state = 87;
                this.match(BoQQIParser.IDENT);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 89;
                this.numericType();
                this.state = 90;
                this.domain();
                this.state = 91;
                this.match(BoQQIParser.IDENT);
                this.state = 92;
                this.match(BoQQIParser.EQUAL);
                this.state = 93;
                this.expr(0);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 95;
                this.nonNumericType();
                this.state = 96;
                this.match(BoQQIParser.IDENT);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 98;
                this.nonNumericType();
                this.state = 99;
                this.match(BoQQIParser.IDENT);
                this.state = 100;
                this.match(BoQQIParser.EQUAL);
                this.state = 101;
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
    public domain(): DomainContext {
        let localContext = new DomainContext(this.context, this.state);
        this.enterRule(localContext, 12, BoQQIParser.RULE_domain);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 105;
            this.match(BoQQIParser.LBRACE);
            this.state = 106;
            this.match(BoQQIParser.MAX);
            this.state = 107;
            this.match(BoQQIParser.COLON);
            this.state = 108;
            this.expr(0);
            this.state = 109;
            this.match(BoQQIParser.COMMA);
            this.state = 110;
            this.match(BoQQIParser.MIN);
            this.state = 111;
            this.match(BoQQIParser.COLON);
            this.state = 112;
            this.expr(0);
            this.state = 113;
            this.match(BoQQIParser.RBRACE);
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
        this.enterRule(localContext, 14, BoQQIParser.RULE_assign);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 115;
            this.match(BoQQIParser.IDENT);
            this.state = 116;
            this.match(BoQQIParser.EQUAL);
            this.state = 117;
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
        this.enterRule(localContext, 16, BoQQIParser.RULE_type);
        try {
            this.state = 121;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case BoQQIParser.TYPE_INT:
            case BoQQIParser.TYPE_FLOAT:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 119;
                this.numericType();
                }
                break;
            case BoQQIParser.TYPE_STRING:
            case BoQQIParser.TYPE_BOOL:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 120;
                this.nonNumericType();
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
    public numericType(): NumericTypeContext {
        let localContext = new NumericTypeContext(this.context, this.state);
        this.enterRule(localContext, 18, BoQQIParser.RULE_numericType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 123;
            _la = this.tokenStream.LA(1);
            if(!(_la === 7 || _la === 8)) {
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
    public nonNumericType(): NonNumericTypeContext {
        let localContext = new NonNumericTypeContext(this.context, this.state);
        this.enterRule(localContext, 20, BoQQIParser.RULE_nonNumericType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 125;
            _la = this.tokenStream.LA(1);
            if(!(_la === 9 || _la === 10)) {
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
        let _startState = 22;
        this.enterRecursionRule(localContext, 22, BoQQIParser.RULE_expr, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 137;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case BoQQIParser.LPAREN:
                {
                localContext = new ParensContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 128;
                this.match(BoQQIParser.LPAREN);
                this.state = 129;
                this.expr(0);
                this.state = 130;
                this.match(BoQQIParser.RPAREN);
                }
                break;
            case BoQQIParser.FLOAT:
                {
                localContext = new FloatContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 132;
                this.match(BoQQIParser.FLOAT);
                }
                break;
            case BoQQIParser.INT:
                {
                localContext = new IntContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 133;
                this.match(BoQQIParser.INT);
                }
                break;
            case BoQQIParser.STRING:
                {
                localContext = new StringContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 134;
                this.match(BoQQIParser.STRING);
                }
                break;
            case BoQQIParser.TRUE:
            case BoQQIParser.FALSE:
                {
                localContext = new BoolContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 135;
                this.boolean_();
                }
                break;
            case BoQQIParser.IDENT:
                {
                localContext = new VarContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 136;
                this.match(BoQQIParser.IDENT);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 153;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 11, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 151;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 10, this.context) ) {
                    case 1:
                        {
                        localContext = new MulDivContext(new ExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, BoQQIParser.RULE_expr);
                        this.state = 139;
                        if (!(this.precpred(this.context, 10))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 10)");
                        }
                        this.state = 140;
                        (localContext as MulDivContext)._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 13 || _la === 14)) {
                            (localContext as MulDivContext)._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 141;
                        this.expr(11);
                        }
                        break;
                    case 2:
                        {
                        localContext = new AddSubContext(new ExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, BoQQIParser.RULE_expr);
                        this.state = 142;
                        if (!(this.precpred(this.context, 9))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 9)");
                        }
                        this.state = 143;
                        (localContext as AddSubContext)._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 11 || _la === 12)) {
                            (localContext as AddSubContext)._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 144;
                        this.expr(10);
                        }
                        break;
                    case 3:
                        {
                        localContext = new CompContext(new ExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, BoQQIParser.RULE_expr);
                        this.state = 145;
                        if (!(this.precpred(this.context, 8))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 8)");
                        }
                        this.state = 146;
                        (localContext as CompContext)._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 3932160) !== 0))) {
                            (localContext as CompContext)._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 147;
                        this.expr(9);
                        }
                        break;
                    case 4:
                        {
                        localContext = new EqContext(new ExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, BoQQIParser.RULE_expr);
                        this.state = 148;
                        if (!(this.precpred(this.context, 7))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 7)");
                        }
                        this.state = 149;
                        (localContext as EqContext)._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 16 || _la === 17)) {
                            (localContext as EqContext)._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 150;
                        this.expr(8);
                        }
                        break;
                    }
                    }
                }
                this.state = 155;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 11, this.context);
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
        this.enterRule(localContext, 24, BoQQIParser.RULE_boolean);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 156;
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
        case 11:
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
        4,1,33,159,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,1,0,5,0,
        28,8,0,10,0,12,0,31,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,1,1,3,1,45,8,1,1,2,1,2,1,2,1,2,1,2,1,2,5,2,53,8,2,10,2,12,2,
        56,9,2,1,2,1,2,1,2,1,2,5,2,62,8,2,10,2,12,2,65,9,2,1,2,3,2,68,8,
        2,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,5,4,78,8,4,10,4,12,4,81,9,4,1,
        4,3,4,84,8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,
        1,5,1,5,1,5,1,5,1,5,3,5,104,8,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,
        1,6,1,6,1,7,1,7,1,7,1,7,1,8,1,8,3,8,122,8,8,1,9,1,9,1,10,1,10,1,
        11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,3,11,138,8,11,1,
        11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,5,11,152,
        8,11,10,11,12,11,155,9,11,1,12,1,12,1,12,0,1,22,13,0,2,4,6,8,10,
        12,14,16,18,20,22,24,0,7,1,0,7,8,1,0,9,10,1,0,13,14,1,0,11,12,1,
        0,18,21,1,0,16,17,1,0,3,4,167,0,29,1,0,0,0,2,44,1,0,0,0,4,46,1,0,
        0,0,6,69,1,0,0,0,8,83,1,0,0,0,10,103,1,0,0,0,12,105,1,0,0,0,14,115,
        1,0,0,0,16,121,1,0,0,0,18,123,1,0,0,0,20,125,1,0,0,0,22,137,1,0,
        0,0,24,156,1,0,0,0,26,28,3,2,1,0,27,26,1,0,0,0,28,31,1,0,0,0,29,
        27,1,0,0,0,29,30,1,0,0,0,30,32,1,0,0,0,31,29,1,0,0,0,32,33,5,0,0,
        1,33,1,1,0,0,0,34,45,3,4,2,0,35,36,3,6,3,0,36,37,5,28,0,0,37,45,
        1,0,0,0,38,39,3,10,5,0,39,40,5,28,0,0,40,45,1,0,0,0,41,42,3,14,7,
        0,42,43,5,28,0,0,43,45,1,0,0,0,44,34,1,0,0,0,44,35,1,0,0,0,44,38,
        1,0,0,0,44,41,1,0,0,0,45,3,1,0,0,0,46,47,5,1,0,0,47,48,5,22,0,0,
        48,49,3,22,11,0,49,50,5,23,0,0,50,54,5,24,0,0,51,53,3,2,1,0,52,51,
        1,0,0,0,53,56,1,0,0,0,54,52,1,0,0,0,54,55,1,0,0,0,55,57,1,0,0,0,
        56,54,1,0,0,0,57,67,5,25,0,0,58,59,5,2,0,0,59,63,5,24,0,0,60,62,
        3,2,1,0,61,60,1,0,0,0,62,65,1,0,0,0,63,61,1,0,0,0,63,64,1,0,0,0,
        64,66,1,0,0,0,65,63,1,0,0,0,66,68,5,25,0,0,67,58,1,0,0,0,67,68,1,
        0,0,0,68,5,1,0,0,0,69,70,5,32,0,0,70,71,5,22,0,0,71,72,3,8,4,0,72,
        73,5,23,0,0,73,7,1,0,0,0,74,79,3,22,11,0,75,76,5,26,0,0,76,78,3,
        22,11,0,77,75,1,0,0,0,78,81,1,0,0,0,79,77,1,0,0,0,79,80,1,0,0,0,
        80,84,1,0,0,0,81,79,1,0,0,0,82,84,1,0,0,0,83,74,1,0,0,0,83,82,1,
        0,0,0,84,9,1,0,0,0,85,86,3,18,9,0,86,87,3,12,6,0,87,88,5,32,0,0,
        88,104,1,0,0,0,89,90,3,18,9,0,90,91,3,12,6,0,91,92,5,32,0,0,92,93,
        5,15,0,0,93,94,3,22,11,0,94,104,1,0,0,0,95,96,3,20,10,0,96,97,5,
        32,0,0,97,104,1,0,0,0,98,99,3,20,10,0,99,100,5,32,0,0,100,101,5,
        15,0,0,101,102,3,22,11,0,102,104,1,0,0,0,103,85,1,0,0,0,103,89,1,
        0,0,0,103,95,1,0,0,0,103,98,1,0,0,0,104,11,1,0,0,0,105,106,5,24,
        0,0,106,107,5,5,0,0,107,108,5,27,0,0,108,109,3,22,11,0,109,110,5,
        26,0,0,110,111,5,6,0,0,111,112,5,27,0,0,112,113,3,22,11,0,113,114,
        5,25,0,0,114,13,1,0,0,0,115,116,5,32,0,0,116,117,5,15,0,0,117,118,
        3,22,11,0,118,15,1,0,0,0,119,122,3,18,9,0,120,122,3,20,10,0,121,
        119,1,0,0,0,121,120,1,0,0,0,122,17,1,0,0,0,123,124,7,0,0,0,124,19,
        1,0,0,0,125,126,7,1,0,0,126,21,1,0,0,0,127,128,6,11,-1,0,128,129,
        5,22,0,0,129,130,3,22,11,0,130,131,5,23,0,0,131,138,1,0,0,0,132,
        138,5,29,0,0,133,138,5,30,0,0,134,138,5,31,0,0,135,138,3,24,12,0,
        136,138,5,32,0,0,137,127,1,0,0,0,137,132,1,0,0,0,137,133,1,0,0,0,
        137,134,1,0,0,0,137,135,1,0,0,0,137,136,1,0,0,0,138,153,1,0,0,0,
        139,140,10,10,0,0,140,141,7,2,0,0,141,152,3,22,11,11,142,143,10,
        9,0,0,143,144,7,3,0,0,144,152,3,22,11,10,145,146,10,8,0,0,146,147,
        7,4,0,0,147,152,3,22,11,9,148,149,10,7,0,0,149,150,7,5,0,0,150,152,
        3,22,11,8,151,139,1,0,0,0,151,142,1,0,0,0,151,145,1,0,0,0,151,148,
        1,0,0,0,152,155,1,0,0,0,153,151,1,0,0,0,153,154,1,0,0,0,154,23,1,
        0,0,0,155,153,1,0,0,0,156,157,7,6,0,0,157,25,1,0,0,0,12,29,44,54,
        63,67,79,83,103,121,137,151,153
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
    public numericType(): NumericTypeContext | null {
        return this.getRuleContext(0, NumericTypeContext);
    }
    public domain(): DomainContext | null {
        return this.getRuleContext(0, DomainContext);
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
    public nonNumericType(): NonNumericTypeContext | null {
        return this.getRuleContext(0, NonNumericTypeContext);
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


export class DomainContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LBRACE(): antlr.TerminalNode {
        return this.getToken(BoQQIParser.LBRACE, 0)!;
    }
    public MAX(): antlr.TerminalNode {
        return this.getToken(BoQQIParser.MAX, 0)!;
    }
    public COLON(): antlr.TerminalNode[];
    public COLON(i: number): antlr.TerminalNode | null;
    public COLON(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(BoQQIParser.COLON);
    	} else {
    		return this.getToken(BoQQIParser.COLON, i);
    	}
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public COMMA(): antlr.TerminalNode {
        return this.getToken(BoQQIParser.COMMA, 0)!;
    }
    public MIN(): antlr.TerminalNode {
        return this.getToken(BoQQIParser.MIN, 0)!;
    }
    public RBRACE(): antlr.TerminalNode {
        return this.getToken(BoQQIParser.RBRACE, 0)!;
    }
    public override get ruleIndex(): number {
        return BoQQIParser.RULE_domain;
    }
    public override enterRule(listener: BoQQIParserListener): void {
        if(listener.enterDomain) {
             listener.enterDomain(this);
        }
    }
    public override exitRule(listener: BoQQIParserListener): void {
        if(listener.exitDomain) {
             listener.exitDomain(this);
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
    public numericType(): NumericTypeContext | null {
        return this.getRuleContext(0, NumericTypeContext);
    }
    public nonNumericType(): NonNumericTypeContext | null {
        return this.getRuleContext(0, NonNumericTypeContext);
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


export class NumericTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TYPE_INT(): antlr.TerminalNode | null {
        return this.getToken(BoQQIParser.TYPE_INT, 0);
    }
    public TYPE_FLOAT(): antlr.TerminalNode | null {
        return this.getToken(BoQQIParser.TYPE_FLOAT, 0);
    }
    public override get ruleIndex(): number {
        return BoQQIParser.RULE_numericType;
    }
    public override enterRule(listener: BoQQIParserListener): void {
        if(listener.enterNumericType) {
             listener.enterNumericType(this);
        }
    }
    public override exitRule(listener: BoQQIParserListener): void {
        if(listener.exitNumericType) {
             listener.exitNumericType(this);
        }
    }
}


export class NonNumericTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TYPE_STRING(): antlr.TerminalNode | null {
        return this.getToken(BoQQIParser.TYPE_STRING, 0);
    }
    public TYPE_BOOL(): antlr.TerminalNode | null {
        return this.getToken(BoQQIParser.TYPE_BOOL, 0);
    }
    public override get ruleIndex(): number {
        return BoQQIParser.RULE_nonNumericType;
    }
    public override enterRule(listener: BoQQIParserListener): void {
        if(listener.enterNonNumericType) {
             listener.enterNonNumericType(this);
        }
    }
    public override exitRule(listener: BoQQIParserListener): void {
        if(listener.exitNonNumericType) {
             listener.exitNonNumericType(this);
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

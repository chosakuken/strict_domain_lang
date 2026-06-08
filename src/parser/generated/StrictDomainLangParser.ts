
import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { StrictDomainLangParserListener } from "./StrictDomainLangParserListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class StrictDomainLangParser extends antlr.Parser {
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
    public static readonly RULE_program = 0;
    public static readonly RULE_statement = 1;
    public static readonly RULE_variableDeclaration = 2;
    public static readonly RULE_assignmentStatement = 3;
    public static readonly RULE_expressionStatement = 4;
    public static readonly RULE_expression = 5;
    public static readonly RULE_additiveExpression = 6;
    public static readonly RULE_multiplicativeExpression = 7;
    public static readonly RULE_primaryExpression = 8;

    public static readonly literalNames = [
        null, "'let'", "'='", "';'", "'('", "')'", "'+'", "'-'", "'*'", 
        "'/'"
    ];

    public static readonly symbolicNames = [
        null, "LET", "ASSIGN", "SEMI", "LPAREN", "RPAREN", "PLUS", "MINUS", 
        "STAR", "SLASH", "NUMBER", "IDENTIFIER", "LINE_COMMENT", "WS"
    ];
    public static readonly ruleNames = [
        "program", "statement", "variableDeclaration", "assignmentStatement", 
        "expressionStatement", "expression", "additiveExpression", "multiplicativeExpression", 
        "primaryExpression",
    ];

    public get grammarFileName(): string { return "StrictDomainLangParser.g4"; }
    public get literalNames(): (string | null)[] { return StrictDomainLangParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return StrictDomainLangParser.symbolicNames; }
    public get ruleNames(): string[] { return StrictDomainLangParser.ruleNames; }
    public get serializedATN(): number[] { return StrictDomainLangParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, StrictDomainLangParser._ATN, StrictDomainLangParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public program(): ProgramContext {
        let localContext = new ProgramContext(this.context, this.state);
        this.enterRule(localContext, 0, StrictDomainLangParser.RULE_program);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 21;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3090) !== 0)) {
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
            this.match(StrictDomainLangParser.EOF);
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
        this.enterRule(localContext, 2, StrictDomainLangParser.RULE_statement);
        try {
            this.state = 29;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 1, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 26;
                this.variableDeclaration();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 27;
                this.assignmentStatement();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 28;
                this.expressionStatement();
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
    public variableDeclaration(): VariableDeclarationContext {
        let localContext = new VariableDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 4, StrictDomainLangParser.RULE_variableDeclaration);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 31;
            this.match(StrictDomainLangParser.LET);
            this.state = 32;
            this.match(StrictDomainLangParser.IDENTIFIER);
            this.state = 33;
            this.match(StrictDomainLangParser.ASSIGN);
            this.state = 34;
            this.expression();
            this.state = 35;
            this.match(StrictDomainLangParser.SEMI);
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
    public assignmentStatement(): AssignmentStatementContext {
        let localContext = new AssignmentStatementContext(this.context, this.state);
        this.enterRule(localContext, 6, StrictDomainLangParser.RULE_assignmentStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 37;
            this.match(StrictDomainLangParser.IDENTIFIER);
            this.state = 38;
            this.match(StrictDomainLangParser.ASSIGN);
            this.state = 39;
            this.expression();
            this.state = 40;
            this.match(StrictDomainLangParser.SEMI);
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
    public expressionStatement(): ExpressionStatementContext {
        let localContext = new ExpressionStatementContext(this.context, this.state);
        this.enterRule(localContext, 8, StrictDomainLangParser.RULE_expressionStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 42;
            this.expression();
            this.state = 43;
            this.match(StrictDomainLangParser.SEMI);
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
    public expression(): ExpressionContext {
        let localContext = new ExpressionContext(this.context, this.state);
        this.enterRule(localContext, 10, StrictDomainLangParser.RULE_expression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 45;
            this.additiveExpression();
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
    public additiveExpression(): AdditiveExpressionContext {
        let localContext = new AdditiveExpressionContext(this.context, this.state);
        this.enterRule(localContext, 12, StrictDomainLangParser.RULE_additiveExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 47;
            this.multiplicativeExpression();
            this.state = 52;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 6 || _la === 7) {
                {
                {
                this.state = 48;
                _la = this.tokenStream.LA(1);
                if(!(_la === 6 || _la === 7)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 49;
                this.multiplicativeExpression();
                }
                }
                this.state = 54;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
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
    public multiplicativeExpression(): MultiplicativeExpressionContext {
        let localContext = new MultiplicativeExpressionContext(this.context, this.state);
        this.enterRule(localContext, 14, StrictDomainLangParser.RULE_multiplicativeExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 55;
            this.primaryExpression();
            this.state = 60;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 8 || _la === 9) {
                {
                {
                this.state = 56;
                _la = this.tokenStream.LA(1);
                if(!(_la === 8 || _la === 9)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 57;
                this.primaryExpression();
                }
                }
                this.state = 62;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
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
    public primaryExpression(): PrimaryExpressionContext {
        let localContext = new PrimaryExpressionContext(this.context, this.state);
        this.enterRule(localContext, 16, StrictDomainLangParser.RULE_primaryExpression);
        try {
            this.state = 69;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case StrictDomainLangParser.NUMBER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 63;
                this.match(StrictDomainLangParser.NUMBER);
                }
                break;
            case StrictDomainLangParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 64;
                this.match(StrictDomainLangParser.IDENTIFIER);
                }
                break;
            case StrictDomainLangParser.LPAREN:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 65;
                this.match(StrictDomainLangParser.LPAREN);
                this.state = 66;
                this.expression();
                this.state = 67;
                this.match(StrictDomainLangParser.RPAREN);
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

    public static readonly _serializedATN: number[] = [
        4,1,13,72,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,1,0,5,0,20,8,0,10,0,12,0,23,9,0,1,0,1,0,1,1,1,
        1,1,1,3,1,30,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,4,
        1,4,1,4,1,5,1,5,1,6,1,6,1,6,5,6,51,8,6,10,6,12,6,54,9,6,1,7,1,7,
        1,7,5,7,59,8,7,10,7,12,7,62,9,7,1,8,1,8,1,8,1,8,1,8,1,8,3,8,70,8,
        8,1,8,0,0,9,0,2,4,6,8,10,12,14,16,0,2,1,0,6,7,1,0,8,9,69,0,21,1,
        0,0,0,2,29,1,0,0,0,4,31,1,0,0,0,6,37,1,0,0,0,8,42,1,0,0,0,10,45,
        1,0,0,0,12,47,1,0,0,0,14,55,1,0,0,0,16,69,1,0,0,0,18,20,3,2,1,0,
        19,18,1,0,0,0,20,23,1,0,0,0,21,19,1,0,0,0,21,22,1,0,0,0,22,24,1,
        0,0,0,23,21,1,0,0,0,24,25,5,0,0,1,25,1,1,0,0,0,26,30,3,4,2,0,27,
        30,3,6,3,0,28,30,3,8,4,0,29,26,1,0,0,0,29,27,1,0,0,0,29,28,1,0,0,
        0,30,3,1,0,0,0,31,32,5,1,0,0,32,33,5,11,0,0,33,34,5,2,0,0,34,35,
        3,10,5,0,35,36,5,3,0,0,36,5,1,0,0,0,37,38,5,11,0,0,38,39,5,2,0,0,
        39,40,3,10,5,0,40,41,5,3,0,0,41,7,1,0,0,0,42,43,3,10,5,0,43,44,5,
        3,0,0,44,9,1,0,0,0,45,46,3,12,6,0,46,11,1,0,0,0,47,52,3,14,7,0,48,
        49,7,0,0,0,49,51,3,14,7,0,50,48,1,0,0,0,51,54,1,0,0,0,52,50,1,0,
        0,0,52,53,1,0,0,0,53,13,1,0,0,0,54,52,1,0,0,0,55,60,3,16,8,0,56,
        57,7,1,0,0,57,59,3,16,8,0,58,56,1,0,0,0,59,62,1,0,0,0,60,58,1,0,
        0,0,60,61,1,0,0,0,61,15,1,0,0,0,62,60,1,0,0,0,63,70,5,10,0,0,64,
        70,5,11,0,0,65,66,5,4,0,0,66,67,3,10,5,0,67,68,5,5,0,0,68,70,1,0,
        0,0,69,63,1,0,0,0,69,64,1,0,0,0,69,65,1,0,0,0,70,17,1,0,0,0,5,21,
        29,52,60,69
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!StrictDomainLangParser.__ATN) {
            StrictDomainLangParser.__ATN = new antlr.ATNDeserializer().deserialize(StrictDomainLangParser._serializedATN);
        }

        return StrictDomainLangParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(StrictDomainLangParser.literalNames, StrictDomainLangParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return StrictDomainLangParser.vocabulary;
    }

    private static readonly decisionsToDFA = StrictDomainLangParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class ProgramContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(StrictDomainLangParser.EOF, 0)!;
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
        return StrictDomainLangParser.RULE_program;
    }
    public override enterRule(listener: StrictDomainLangParserListener): void {
        if(listener.enterProgram) {
             listener.enterProgram(this);
        }
    }
    public override exitRule(listener: StrictDomainLangParserListener): void {
        if(listener.exitProgram) {
             listener.exitProgram(this);
        }
    }
}


export class StatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public variableDeclaration(): VariableDeclarationContext | null {
        return this.getRuleContext(0, VariableDeclarationContext);
    }
    public assignmentStatement(): AssignmentStatementContext | null {
        return this.getRuleContext(0, AssignmentStatementContext);
    }
    public expressionStatement(): ExpressionStatementContext | null {
        return this.getRuleContext(0, ExpressionStatementContext);
    }
    public override get ruleIndex(): number {
        return StrictDomainLangParser.RULE_statement;
    }
    public override enterRule(listener: StrictDomainLangParserListener): void {
        if(listener.enterStatement) {
             listener.enterStatement(this);
        }
    }
    public override exitRule(listener: StrictDomainLangParserListener): void {
        if(listener.exitStatement) {
             listener.exitStatement(this);
        }
    }
}


export class VariableDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LET(): antlr.TerminalNode {
        return this.getToken(StrictDomainLangParser.LET, 0)!;
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(StrictDomainLangParser.IDENTIFIER, 0)!;
    }
    public ASSIGN(): antlr.TerminalNode {
        return this.getToken(StrictDomainLangParser.ASSIGN, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(StrictDomainLangParser.SEMI, 0)!;
    }
    public override get ruleIndex(): number {
        return StrictDomainLangParser.RULE_variableDeclaration;
    }
    public override enterRule(listener: StrictDomainLangParserListener): void {
        if(listener.enterVariableDeclaration) {
             listener.enterVariableDeclaration(this);
        }
    }
    public override exitRule(listener: StrictDomainLangParserListener): void {
        if(listener.exitVariableDeclaration) {
             listener.exitVariableDeclaration(this);
        }
    }
}


export class AssignmentStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(StrictDomainLangParser.IDENTIFIER, 0)!;
    }
    public ASSIGN(): antlr.TerminalNode {
        return this.getToken(StrictDomainLangParser.ASSIGN, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(StrictDomainLangParser.SEMI, 0)!;
    }
    public override get ruleIndex(): number {
        return StrictDomainLangParser.RULE_assignmentStatement;
    }
    public override enterRule(listener: StrictDomainLangParserListener): void {
        if(listener.enterAssignmentStatement) {
             listener.enterAssignmentStatement(this);
        }
    }
    public override exitRule(listener: StrictDomainLangParserListener): void {
        if(listener.exitAssignmentStatement) {
             listener.exitAssignmentStatement(this);
        }
    }
}


export class ExpressionStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(StrictDomainLangParser.SEMI, 0)!;
    }
    public override get ruleIndex(): number {
        return StrictDomainLangParser.RULE_expressionStatement;
    }
    public override enterRule(listener: StrictDomainLangParserListener): void {
        if(listener.enterExpressionStatement) {
             listener.enterExpressionStatement(this);
        }
    }
    public override exitRule(listener: StrictDomainLangParserListener): void {
        if(listener.exitExpressionStatement) {
             listener.exitExpressionStatement(this);
        }
    }
}


export class ExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public additiveExpression(): AdditiveExpressionContext {
        return this.getRuleContext(0, AdditiveExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return StrictDomainLangParser.RULE_expression;
    }
    public override enterRule(listener: StrictDomainLangParserListener): void {
        if(listener.enterExpression) {
             listener.enterExpression(this);
        }
    }
    public override exitRule(listener: StrictDomainLangParserListener): void {
        if(listener.exitExpression) {
             listener.exitExpression(this);
        }
    }
}


export class AdditiveExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public multiplicativeExpression(): MultiplicativeExpressionContext[];
    public multiplicativeExpression(i: number): MultiplicativeExpressionContext | null;
    public multiplicativeExpression(i?: number): MultiplicativeExpressionContext[] | MultiplicativeExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(MultiplicativeExpressionContext);
        }

        return this.getRuleContext(i, MultiplicativeExpressionContext);
    }
    public PLUS(): antlr.TerminalNode[];
    public PLUS(i: number): antlr.TerminalNode | null;
    public PLUS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(StrictDomainLangParser.PLUS);
    	} else {
    		return this.getToken(StrictDomainLangParser.PLUS, i);
    	}
    }
    public MINUS(): antlr.TerminalNode[];
    public MINUS(i: number): antlr.TerminalNode | null;
    public MINUS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(StrictDomainLangParser.MINUS);
    	} else {
    		return this.getToken(StrictDomainLangParser.MINUS, i);
    	}
    }
    public override get ruleIndex(): number {
        return StrictDomainLangParser.RULE_additiveExpression;
    }
    public override enterRule(listener: StrictDomainLangParserListener): void {
        if(listener.enterAdditiveExpression) {
             listener.enterAdditiveExpression(this);
        }
    }
    public override exitRule(listener: StrictDomainLangParserListener): void {
        if(listener.exitAdditiveExpression) {
             listener.exitAdditiveExpression(this);
        }
    }
}


export class MultiplicativeExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public primaryExpression(): PrimaryExpressionContext[];
    public primaryExpression(i: number): PrimaryExpressionContext | null;
    public primaryExpression(i?: number): PrimaryExpressionContext[] | PrimaryExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PrimaryExpressionContext);
        }

        return this.getRuleContext(i, PrimaryExpressionContext);
    }
    public STAR(): antlr.TerminalNode[];
    public STAR(i: number): antlr.TerminalNode | null;
    public STAR(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(StrictDomainLangParser.STAR);
    	} else {
    		return this.getToken(StrictDomainLangParser.STAR, i);
    	}
    }
    public SLASH(): antlr.TerminalNode[];
    public SLASH(i: number): antlr.TerminalNode | null;
    public SLASH(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(StrictDomainLangParser.SLASH);
    	} else {
    		return this.getToken(StrictDomainLangParser.SLASH, i);
    	}
    }
    public override get ruleIndex(): number {
        return StrictDomainLangParser.RULE_multiplicativeExpression;
    }
    public override enterRule(listener: StrictDomainLangParserListener): void {
        if(listener.enterMultiplicativeExpression) {
             listener.enterMultiplicativeExpression(this);
        }
    }
    public override exitRule(listener: StrictDomainLangParserListener): void {
        if(listener.exitMultiplicativeExpression) {
             listener.exitMultiplicativeExpression(this);
        }
    }
}


export class PrimaryExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NUMBER(): antlr.TerminalNode | null {
        return this.getToken(StrictDomainLangParser.NUMBER, 0);
    }
    public IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(StrictDomainLangParser.IDENTIFIER, 0);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(StrictDomainLangParser.LPAREN, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(StrictDomainLangParser.RPAREN, 0);
    }
    public override get ruleIndex(): number {
        return StrictDomainLangParser.RULE_primaryExpression;
    }
    public override enterRule(listener: StrictDomainLangParserListener): void {
        if(listener.enterPrimaryExpression) {
             listener.enterPrimaryExpression(this);
        }
    }
    public override exitRule(listener: StrictDomainLangParserListener): void {
        if(listener.exitPrimaryExpression) {
             listener.exitPrimaryExpression(this);
        }
    }
}

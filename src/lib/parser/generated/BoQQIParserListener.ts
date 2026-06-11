
import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


import { ProgramContext } from "./BoQQIParser.js";
import { StatementContext } from "./BoQQIParser.js";
import { IfContext } from "./BoQQIParser.js";
import { AssignContext } from "./BoQQIParser.js";
import { ParensContext } from "./BoQQIParser.js";
import { IntContext } from "./BoQQIParser.js";
import { VarContext } from "./BoQQIParser.js";
import { MulDivContext } from "./BoQQIParser.js";
import { AddSubContext } from "./BoQQIParser.js";
import { CompContext } from "./BoQQIParser.js";
import { EqContext } from "./BoQQIParser.js";
import { CallContext } from "./BoQQIParser.js";
import { ArgsContext } from "./BoQQIParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `BoQQIParser`.
 */
export class BoQQIParserListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `BoQQIParser.program`.
     * @param ctx the parse tree
     */
    enterProgram?: (ctx: ProgramContext) => void;
    /**
     * Exit a parse tree produced by `BoQQIParser.program`.
     * @param ctx the parse tree
     */
    exitProgram?: (ctx: ProgramContext) => void;
    /**
     * Enter a parse tree produced by `BoQQIParser.statement`.
     * @param ctx the parse tree
     */
    enterStatement?: (ctx: StatementContext) => void;
    /**
     * Exit a parse tree produced by `BoQQIParser.statement`.
     * @param ctx the parse tree
     */
    exitStatement?: (ctx: StatementContext) => void;
    /**
     * Enter a parse tree produced by `BoQQIParser.if`.
     * @param ctx the parse tree
     */
    enterIf?: (ctx: IfContext) => void;
    /**
     * Exit a parse tree produced by `BoQQIParser.if`.
     * @param ctx the parse tree
     */
    exitIf?: (ctx: IfContext) => void;
    /**
     * Enter a parse tree produced by `BoQQIParser.assign`.
     * @param ctx the parse tree
     */
    enterAssign?: (ctx: AssignContext) => void;
    /**
     * Exit a parse tree produced by `BoQQIParser.assign`.
     * @param ctx the parse tree
     */
    exitAssign?: (ctx: AssignContext) => void;
    /**
     * Enter a parse tree produced by the `Parens`
     * labeled alternative in `BoQQIParser.expr`.
     * @param ctx the parse tree
     */
    enterParens?: (ctx: ParensContext) => void;
    /**
     * Exit a parse tree produced by the `Parens`
     * labeled alternative in `BoQQIParser.expr`.
     * @param ctx the parse tree
     */
    exitParens?: (ctx: ParensContext) => void;
    /**
     * Enter a parse tree produced by the `Int`
     * labeled alternative in `BoQQIParser.expr`.
     * @param ctx the parse tree
     */
    enterInt?: (ctx: IntContext) => void;
    /**
     * Exit a parse tree produced by the `Int`
     * labeled alternative in `BoQQIParser.expr`.
     * @param ctx the parse tree
     */
    exitInt?: (ctx: IntContext) => void;
    /**
     * Enter a parse tree produced by the `Var`
     * labeled alternative in `BoQQIParser.expr`.
     * @param ctx the parse tree
     */
    enterVar?: (ctx: VarContext) => void;
    /**
     * Exit a parse tree produced by the `Var`
     * labeled alternative in `BoQQIParser.expr`.
     * @param ctx the parse tree
     */
    exitVar?: (ctx: VarContext) => void;
    /**
     * Enter a parse tree produced by the `MulDiv`
     * labeled alternative in `BoQQIParser.expr`.
     * @param ctx the parse tree
     */
    enterMulDiv?: (ctx: MulDivContext) => void;
    /**
     * Exit a parse tree produced by the `MulDiv`
     * labeled alternative in `BoQQIParser.expr`.
     * @param ctx the parse tree
     */
    exitMulDiv?: (ctx: MulDivContext) => void;
    /**
     * Enter a parse tree produced by the `AddSub`
     * labeled alternative in `BoQQIParser.expr`.
     * @param ctx the parse tree
     */
    enterAddSub?: (ctx: AddSubContext) => void;
    /**
     * Exit a parse tree produced by the `AddSub`
     * labeled alternative in `BoQQIParser.expr`.
     * @param ctx the parse tree
     */
    exitAddSub?: (ctx: AddSubContext) => void;
    /**
     * Enter a parse tree produced by the `comp`
     * labeled alternative in `BoQQIParser.expr`.
     * @param ctx the parse tree
     */
    enterComp?: (ctx: CompContext) => void;
    /**
     * Exit a parse tree produced by the `comp`
     * labeled alternative in `BoQQIParser.expr`.
     * @param ctx the parse tree
     */
    exitComp?: (ctx: CompContext) => void;
    /**
     * Enter a parse tree produced by the `eq`
     * labeled alternative in `BoQQIParser.expr`.
     * @param ctx the parse tree
     */
    enterEq?: (ctx: EqContext) => void;
    /**
     * Exit a parse tree produced by the `eq`
     * labeled alternative in `BoQQIParser.expr`.
     * @param ctx the parse tree
     */
    exitEq?: (ctx: EqContext) => void;
    /**
     * Enter a parse tree produced by `BoQQIParser.call`.
     * @param ctx the parse tree
     */
    enterCall?: (ctx: CallContext) => void;
    /**
     * Exit a parse tree produced by `BoQQIParser.call`.
     * @param ctx the parse tree
     */
    exitCall?: (ctx: CallContext) => void;
    /**
     * Enter a parse tree produced by `BoQQIParser.args`.
     * @param ctx the parse tree
     */
    enterArgs?: (ctx: ArgsContext) => void;
    /**
     * Exit a parse tree produced by `BoQQIParser.args`.
     * @param ctx the parse tree
     */
    exitArgs?: (ctx: ArgsContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}


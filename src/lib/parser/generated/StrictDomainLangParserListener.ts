import {
  ErrorNode,
  ParseTreeListener,
  ParserRuleContext,
  TerminalNode,
} from "antlr4ng";

import { ProgramContext } from "./StrictDomainLangParser.js";
import { ParensContext } from "./StrictDomainLangParser.js";
import { IntContext } from "./StrictDomainLangParser.js";
import { MulDivContext } from "./StrictDomainLangParser.js";
import { AddSubContext } from "./StrictDomainLangParser.js";

/**
 * This interface defines a complete listener for a parse tree produced by
 * `StrictDomainLangParser`.
 */
export class StrictDomainLangParserListener implements ParseTreeListener {
  /**
   * Enter a parse tree produced by `StrictDomainLangParser.program`.
   * @param ctx the parse tree
   */
  enterProgram?: (ctx: ProgramContext) => void;
  /**
   * Exit a parse tree produced by `StrictDomainLangParser.program`.
   * @param ctx the parse tree
   */
  exitProgram?: (ctx: ProgramContext) => void;
  /**
   * Enter a parse tree produced by the `Parens`
   * labeled alternative in `StrictDomainLangParser.expr`.
   * @param ctx the parse tree
   */
  enterParens?: (ctx: ParensContext) => void;
  /**
   * Exit a parse tree produced by the `Parens`
   * labeled alternative in `StrictDomainLangParser.expr`.
   * @param ctx the parse tree
   */
  exitParens?: (ctx: ParensContext) => void;
  /**
   * Enter a parse tree produced by the `Int`
   * labeled alternative in `StrictDomainLangParser.expr`.
   * @param ctx the parse tree
   */
  enterInt?: (ctx: IntContext) => void;
  /**
   * Exit a parse tree produced by the `Int`
   * labeled alternative in `StrictDomainLangParser.expr`.
   * @param ctx the parse tree
   */
  exitInt?: (ctx: IntContext) => void;
  /**
   * Enter a parse tree produced by the `MulDiv`
   * labeled alternative in `StrictDomainLangParser.expr`.
   * @param ctx the parse tree
   */
  enterMulDiv?: (ctx: MulDivContext) => void;
  /**
   * Exit a parse tree produced by the `MulDiv`
   * labeled alternative in `StrictDomainLangParser.expr`.
   * @param ctx the parse tree
   */
  exitMulDiv?: (ctx: MulDivContext) => void;
  /**
   * Enter a parse tree produced by the `AddSub`
   * labeled alternative in `StrictDomainLangParser.expr`.
   * @param ctx the parse tree
   */
  enterAddSub?: (ctx: AddSubContext) => void;
  /**
   * Exit a parse tree produced by the `AddSub`
   * labeled alternative in `StrictDomainLangParser.expr`.
   * @param ctx the parse tree
   */
  exitAddSub?: (ctx: AddSubContext) => void;

  visitTerminal(node: TerminalNode): void {}
  visitErrorNode(node: ErrorNode): void {}
  enterEveryRule(node: ParserRuleContext): void {}
  exitEveryRule(node: ParserRuleContext): void {}
}

import {
  AddSubContext,
  CallContext,
  ExprContext,
  IdentContext,
  IntContext,
  MulDivContext,
  ParensContext,
  ProgramContext,
  StatementContext,
} from "../parser/generated/BoQQIParser.js";
import { BinaryNode, type BinaryOperator } from "./nodes/binary.js";
import { CallNode } from "./nodes/call.js";
import type { ExprNode } from "./nodes/expr.js";
import { IntNode } from "./nodes/int.js";
import { ProgramNode } from "./nodes/program.js";
import type { StatementNode } from "./nodes/statement.js";

export function buildProgramAst(ctx: ProgramContext): ProgramNode {
  return new ProgramNode(ctx.statement().map(buildStatementAst));
}

export function buildStatementAst(ctx: StatementContext): StatementNode {
  const call = ctx.call();
  if (call !== null) {
    return buildCallAst(call);
  }

  const expr = ctx.expr();
  if (expr !== null) {
    return buildExprAst(expr);
  }

  throw new Error(`Unsupported statement context: ${ctx.getText()}`);
}

export function buildCallAst(ctx: CallContext): CallNode {
  return new CallNode(
    ctx.IDENT().getText(),
    ctx.args().expr().map(buildExprAst),
  );
}

export function buildExprAst(ctx: ExprContext): ExprNode {
  if (ctx instanceof IntContext) {
    return new IntNode(Number(ctx.INT().getText()));
  }

  if (ctx instanceof ParensContext) {
    return buildExprAst(ctx.expr());
  }

  if (ctx instanceof IdentContext) {
    throw new Error(`Unsupported identifier expression: ${ctx.getText()}`);
  }

  if (ctx instanceof AddSubContext || ctx instanceof MulDivContext) {
    const left = ctx.expr(0);
    const right = ctx.expr(1);
    const operator = ctx._op?.text;

    if (left === null || right === null) {
      throw new Error(
        `Binary expression is missing operands: ${ctx.getText()}`,
      );
    }

    if (!isBinaryOperator(operator)) {
      throw new Error(
        `Unsupported binary operator: ${operator ?? "<missing>"}`,
      );
    }

    return new BinaryNode(operator, buildExprAst(left), buildExprAst(right));
  }

  throw new Error(`Unsupported expression context: ${ctx.constructor.name}`);
}

function isBinaryOperator(value: string | undefined): value is BinaryOperator {
  return value === "+" || value === "-" || value === "*" || value === "/";
}

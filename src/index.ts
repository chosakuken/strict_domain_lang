#!/usr/bin/env node

import { Command } from "commander";
import { readFile } from "node:fs/promises";
import { stdin } from "node:process";

import { tokenize } from "./lexer/tokenize.js";
import { parse } from "./parser/parse.js";

async function readSource(path?: string): Promise<string> {
  if (path !== undefined) {
    return readFile(path, "utf8");
  }

  const chunks: Buffer[] = [];

  for await (const chunk of stdin) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }

  return Buffer.concat(chunks).toString("utf8");
}

export function createCli(): Command {
  const program = new Command();

  program
    .name("stl")
    .description("Strict Domain Language command line tool")
    .version("0.0.0")
    .action(() => {
      program.help();
    });

  program
    .command("tokens")
    .description("Print lexer tokens")
    .argument("[file]", "source file path")
    .action(async (file?: string) => {
      const source = await readSource(file);
      process.stdout.write(`${JSON.stringify(tokenize(source), null, 2)}\n`);
    });

  program
    .command("parse")
    .description("Print parser result as an ANTLR parse tree")
    .argument("[file]", "source file path")
    .action(async (file?: string) => {
      const source = await readSource(file);
      const result = parse(source);
      process.stdout.write(`${result.tree.toStringTree(result.parser)}\n`);
    });

  return program;
}

createCli()
  .parseAsync()
  .catch((error: unknown) => {
    const message =
      error instanceof Error ? (error.stack ?? error.message) : String(error);

    process.stderr.write(`${message}\n`);
    process.exitCode = 1;
  });

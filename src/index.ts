#!/usr/bin/env node

import { Command } from "commander";
import { createLexerCommand } from "./commands/lexer.js";
import { createParserCommand } from "./commands/parser.js";

export function createCli(): Command {
  const program = new Command();

  program
    .name("stl")
    .description("Strict Domain Language command line tool")
    .version("0.0.0")
    .action(() => {
      program.help();
    });

  program.addCommand(createLexerCommand());
  program.addCommand(createParserCommand());

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

import { Command } from "commander";
import { readFile } from "node:fs/promises";
import { tokenize } from "../lib/lexer/tokenize.js";

export function createLexerCommand(): Command {
  return new Command("lexer")
    .description("")
    .argument("<file>", "source file path")
    .action(async (file: string) => {
      const source = await readFile(file, "utf-8");
      const result = tokenize(source);
      process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
    });
}

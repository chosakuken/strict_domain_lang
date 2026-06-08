import { Command } from "commander";
import { readFile } from "node:fs/promises";
import { parse } from "../lib/parser/parse.js";

export function createParserCommand(): Command {
  return new Command("parse")
    .description("")
    .argument("<file>", "source file path")
    .action(async (file: string) => {
      const source = await readFile(file, "utf-8");
      const result = parse(source);
      process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
    });
}

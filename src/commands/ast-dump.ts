import { Command } from "commander";
import { readFile } from "node:fs/promises";
import { parseToAst } from "../lib/ast/parseToAst.js";

export function createAstDumpCommand(): Command {
  return new Command("ast-dump")
    .description("")
    .argument("<file>", "source file path")
    .action(async (file: string) => {
      const source = await readFile(file, "utf-8");
      const result = parseToAst(source);
      process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
    });
}

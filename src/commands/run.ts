import { Command } from "commander";
import { readFile } from "node:fs/promises";
import { parseToAst } from "../lib/ast/parseToAst.js";
import { BoqqiInterpreter } from "../lib/visitor/interpreter.js";

export function createRunCommand(): Command {
  return new Command("run")
    .description("")
    .argument("<file>", "source file path")
    .action(async (file: string) => {
      const source = await readFile(file, "utf-8");
      const ast = parseToAst(source);
      const interpreter = new BoqqiInterpreter();
      const res = interpreter.visitProgram(ast);
      process.stdout.write(`${res.value}\n`);
    });
}

#!/usr/bin/env node

import { Command } from "commander";

export function createCli(): Command {
    const program = new Command();

    program.name("stl").description("Strict Domain Language command line tool").version("0.0.0").action(async () => {
        process.stdout.write("Hello, This is Strict Domain Language!\n");
    });

    return program;
}

createCli().parseAsync();

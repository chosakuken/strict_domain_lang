import { RuntimeValue } from "./runtimeValue.js";

export class IntValue implements RuntimeValue {
    readonly type: "int";
    readonly value: number;
    constructor(v: number) {
        this.type = "int";
        this.value = v;
    }
}
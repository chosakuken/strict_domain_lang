export interface NumberValue {
  readonly type: string;
  readonly value: number;
}

export class IntValue implements NumberValue {
  readonly type: "int";
  readonly value: number;
  constructor(v: number) {
    this.type = "int";
    this.value = v;
  }
}

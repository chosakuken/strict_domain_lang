export interface ValuableValue<T> {
  readonly type: string;
  readonly value: T;
}

export class IntValue implements ValuableValue<number> {
  readonly type: "int";
  readonly value: number;
  constructor(v: number) {
    this.type = "int";
    this.value = v;
  }
}

export class BoolValue implements ValuableValue<boolean> {
  readonly type: "bool";
  readonly value: boolean;
  constructor(v: boolean) {
    this.type = "bool";
    this.value = v;
  }
}

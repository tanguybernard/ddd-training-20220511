import { ValueObject } from "../../../shared-kernel/value-object";

export class Period extends ValueObject<{ startDate: Date; endDate: Date }> {
  constructor(public readonly startDate: Date, public readonly endDate: Date) {
    super({ startDate, endDate });
  }

  //TODO check valid period

}

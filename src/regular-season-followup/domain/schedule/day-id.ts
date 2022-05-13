import { ValueObjectId } from "../../../shared-kernel/value-object-id";

export default class DayId extends ValueObjectId<number> {
  constructor(public readonly id: number) {
    super(id);
  }

}

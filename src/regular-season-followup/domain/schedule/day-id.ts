import { ValueObjectId } from "../../../shared-kernel/value-object-id";

export default class DayId extends ValueObjectId<string> {
  constructor(public readonly id: string) {
    super(id);
  }

}

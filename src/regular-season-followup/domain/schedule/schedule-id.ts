import { ValueObjectId } from "../../../shared-kernel/value-object-id";

export class ScheduleId extends ValueObjectId<number> {
  constructor(public readonly id: number) {
    super(id);
  }
}

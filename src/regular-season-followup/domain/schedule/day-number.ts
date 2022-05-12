import { DomainEntity } from "./../../../shared-kernel/domain-entity";
import DayId from "./day-id";

export default class DayNumber extends DomainEntity<DayId> {
  constructor(public readonly dayId: DayId, listMatch: number[]) {
    super(dayId);
  }
}

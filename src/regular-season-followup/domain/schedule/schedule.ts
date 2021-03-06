import DayNumber from "./day-number";
import { ScheduleId } from "./schedule-id";
import { Period } from "../../../shared-kernel/utils/date/period";
import { AggregateRoot } from "../../../shared-kernel/aggregate-root";
import ScheduleCreatedDomainEvent from "./events/schedule-created-domain-event";

export class Schedule extends AggregateRoot<ScheduleId> {
  private constructor(
    private scheduleId: ScheduleId,
    private period: Period,
    private days: DayNumber[]
  ) {
    super(scheduleId);
    const errors = [];
  }

  public static create(
    scheduleId: ScheduleId,
    period: Period,
    days: DayNumber[]
  ): Schedule {
    const errors = [];
    if (errors.length > 0) {
      throw new Error(JSON.stringify(errors));
    }
    const scheduleCreated =  new Schedule(scheduleId, period, days);
    scheduleCreated.record(new ScheduleCreatedDomainEvent(scheduleId, new Date(), 'schedule.created'));
    return scheduleCreated;
  }
}

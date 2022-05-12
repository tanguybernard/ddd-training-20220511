import { Period } from "../domain/schedule/period";
import { Schedule } from "../domain/schedule/schedule";
import { ScheduleId } from "../domain/schedule/schedule-id";
import DayNumber from "../domain/schedule/day-number";
import DayId from "../domain/schedule/day-id";

export class CreateSchedule {
  create() {
    return Schedule.create(
      new ScheduleId(1), 
      new Period(new Date(), new Date()),
      [new DayNumber(new DayId("2022-01"), [])]

      
      );
  }
}

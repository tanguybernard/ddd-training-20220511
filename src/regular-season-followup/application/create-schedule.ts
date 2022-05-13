import { Schedule } from "../domain/schedule/schedule";
import { ScheduleId } from "../domain/schedule/schedule-id";
import DayNumber from "../domain/schedule/day-number";
import DayId from "../domain/schedule/day-id";
import { Period } from "../../shared-kernel/utils/date/period";
import ScheduleRepository from "../domain/schedule/schedule-repository";


export class CreateSchedule {

  constructor(private scheduleRepository: ScheduleRepository){}

  create(period: Period, dayNumber: DayNumber[]) {

    return this.scheduleRepository.create(period, dayNumber);
    
  }
}

import { Schedule } from "../domain/schedule/schedule";
import { ScheduleId } from "../domain/schedule/schedule-id";
import DayNumber from "../domain/schedule/day-number";
import { Period } from "../../shared-kernel/utils/date/period";
import ScheduleRepository from "../domain/schedule/schedule-repository";
import EventBus from "src/shared-kernel/bus/event-bus";


export class CreateSchedule {

  constructor(
    private scheduleRepository: ScheduleRepository,
    private bus: EventBus

    ){}

  async create(period: Period, dayNumber: DayNumber[]) {
    const schedule = await this.scheduleRepository.create(period, dayNumber);
    this.bus.publish(schedule.pullDomainEvents());
  }
}

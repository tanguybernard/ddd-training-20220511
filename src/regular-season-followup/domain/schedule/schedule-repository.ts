import { Period } from "src/shared-kernel/utils/date/period";
import DayNumber from "./day-number";
import { Schedule } from "./schedule";

export default interface ScheduleRepository{

    create(period: Period, daysNumber: DayNumber[]): Schedule;

}
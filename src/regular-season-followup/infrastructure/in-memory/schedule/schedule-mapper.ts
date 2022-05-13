import DayId from "./../../../../regular-season-followup/domain/schedule/day-id";
import DayNumber from "./../../../../regular-season-followup/domain/schedule/day-number";
import { Schedule } from "./../../../../regular-season-followup/domain/schedule/schedule";
import { ScheduleId } from "./../../../../regular-season-followup/domain/schedule/schedule-id";
import { Period } from "./../../../../shared-kernel/utils/date/period";
import ScheduleDto from "./schedule-dto";

export default class ScheduleMapper {

    toDomain(scheduleDto: ScheduleDto){

      const period = Period.create(scheduleDto.startDate, scheduleDto.endDate);
      const dayNumbers: DayNumber[] = [];
      
      scheduleDto?.matchIdsByDayId
        ?.forEach((value: number[], key: number) => {
          const dayNumber = new DayNumber(new DayId(key), value)
            return dayNumbers.push(dayNumber)
        }
        );

        return Schedule.create(
            new ScheduleId(scheduleDto.id),
            period,
            dayNumbers            
            );

    }


}
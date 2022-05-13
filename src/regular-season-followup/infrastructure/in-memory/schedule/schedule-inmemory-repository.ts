import dayNumber from "./../../../../regular-season-followup/domain/schedule/day-number";
import { Schedule } from "./../../../../regular-season-followup/domain/schedule/schedule";
import { ScheduleId } from "./../../../../regular-season-followup/domain/schedule/schedule-id";
import ScheduleRepository from "./../../../../regular-season-followup/domain/schedule/schedule-repository";
import { Period } from "./../../../../shared-kernel/utils/date/period";


export default class ScheduleInMemoryRepository implements ScheduleRepository {

    //constructor(dao: ScheduleDao, mapper: ScheduleMapper){}


    create(period: Period, dayNumbers: dayNumber[]): Schedule {

        // dto = call dao
        // return mapper.toDomain(dto)    

        return Schedule.create(
            new ScheduleId(1), 
            period,
            dayNumbers
      );
    }
}
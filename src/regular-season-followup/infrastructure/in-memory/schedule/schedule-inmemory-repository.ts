import DayNumber from "./../../../../regular-season-followup/domain/schedule/day-number";
import dayNumber from "./../../../../regular-season-followup/domain/schedule/day-number";
import { Schedule } from "./../../../../regular-season-followup/domain/schedule/schedule";
import { ScheduleId } from "./../../../../regular-season-followup/domain/schedule/schedule-id";
import ScheduleRepository from "./../../../../regular-season-followup/domain/schedule/schedule-repository";
import { Period } from "./../../../../shared-kernel/utils/date/period";
import MatchDao from "./match/match-dao";
import ScheduleDao from "./schedule-dao";
import ScheduleMapper from "./schedule-mapper";


export default class ScheduleInMemoryRepository implements ScheduleRepository {

    constructor(
        private dao: ScheduleDao,
        private matchDao: MatchDao,
        private mapper: ScheduleMapper){}

    async create(period: Period, dayNumbers: DayNumber[]): Promise<Schedule> {

        const scheduleDto = this.dao.save(period.startDate, period.endDate);

        // const dayDto = this.dayDto.save()
        // const matchDto = this.matchDao.save();

        return this.mapper.toDomain(scheduleDto);
    }

    getListMatchForDay(day: number){

        // check cache
        //else sql request

    }
}

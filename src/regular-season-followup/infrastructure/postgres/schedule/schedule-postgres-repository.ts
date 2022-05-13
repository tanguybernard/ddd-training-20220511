import ScheduleDto from './schedule-dto';
import {Repository} from "typeorm";
import ScheduleRepository from './../../../domain/schedule/schedule-repository';
import dayNumber from 'src/regular-season-followup/domain/schedule/day-number';
import { Schedule } from 'src/regular-season-followup/domain/schedule/schedule';
import { Period } from 'src/shared-kernel/utils/date/period';
import { ScheduleId } from 'src/regular-season-followup/domain/schedule/schedule-id';

export default class SchedulePgRepo implements ScheduleRepository{

    constructor(private dao: Repository<ScheduleDto>){}

    async create(period: Period, daysNumber: dayNumber[]): Promise<Schedule> {
        const schedule = new ScheduleDto()
        schedule.start_date = period.startDate;
        schedule.end_date = period.endDate;
        await this.dao.save(schedule)

        return Schedule.create(
            new ScheduleId(schedule.id),
            Period.create(schedule.start_date, schedule.end_date),
            []
        );

    }

}

import { CreateSchedule } from "./application/create-schedule";
import ScheduleRepository from "./domain/schedule/schedule-repository";
import ScheduleInMemoryRepository from "./infrastructure/in-memory/schedule/schedule-inmemory-repository";

export default class RegularSeasonFollowUpFactory{



    private static getScheduleRepository(): ScheduleRepository{
        // return new SchedulePostgresRepository();
        //return new ScheduleInMemoryRepository(new ScheduleDao(), new ScheduleMapper());
        return new ScheduleInMemoryRepository();
    }

    public static createScheduleUseCase(){
        return new CreateSchedule(this.getScheduleRepository())
    }

}
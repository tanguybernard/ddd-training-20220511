import { CreateSchedule } from "./application/create-schedule";
import ScheduleRepository from "./domain/schedule/schedule-repository";
import InternalEventBus from "./infrastructure/bus/internal-event-bus";
import LoggerSubscriber from "./infrastructure/bus/logger-subscriber";
import MatchDao from "./infrastructure/in-memory/schedule/match/match-dao";
import ScheduleDao from "./infrastructure/in-memory/schedule/schedule-dao";
import ScheduleInMemoryRepository from "./infrastructure/in-memory/schedule/schedule-inmemory-repository";
import ScheduleMapper from "./infrastructure/in-memory/schedule/schedule-mapper";
import SchedulePostgresOrganizationDao from "./infrastructure/postgres/schedule/schedule-dao";
import SchedulePostgresRepository from "./infrastructure/postgres/schedule/schedule-postgres-repository";

export default class RegularSeasonFollowUpFactory{


    private static getEventBus(){
        const eventBus = new InternalEventBus();
        eventBus.subscribe(new LoggerSubscriber());
        return eventBus;
    }

    private static getScheduleRepository(): ScheduleRepository{
        //return new SchedulePostgresRepository(SchedulePostgresOrganizationDao);

        return new ScheduleInMemoryRepository(
            new ScheduleDao(), 
            new MatchDao(),
            new ScheduleMapper());
    }

    public static createScheduleUseCase(){
        return new CreateSchedule(this.getScheduleRepository(), this.getEventBus())
    }

}
import ScheduleDto from "./schedule-dto";

export default class ScheduleDao {

    save(startDate, endDate): ScheduleDto{

        // sauvegarde en base
        // INSERT  
        // sauvegarde sur disque
        // filesystem.save(json)

        const id = 1;

        return new ScheduleDto(id, startDate, endDate, null, null);

    }


}
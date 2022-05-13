import {AppDataSource} from "../../../../data-source";
import ScheduleDto from "../../in-memory/schedule/schedule-dto";

export default AppDataSource.getRepository(ScheduleDto);

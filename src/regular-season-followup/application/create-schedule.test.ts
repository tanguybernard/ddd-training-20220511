import DayId from "../domain/schedule/day-id";
import DayNumber from "../domain/schedule/day-number";
import { ScheduleId } from "../domain/schedule/schedule-id";
import { CreateSchedule } from "./create-schedule"
import { Period } from "../../shared-kernel/utils/date/period";
import RegularSeasonFollowUpFactory from "../regular-season-followup-factory";

describe(`${CreateSchedule.name}`, () => {
  let createScheduleUsecase: CreateSchedule;

  beforeEach(() => {
    createScheduleUsecase = RegularSeasonFollowUpFactory.createScheduleUseCase();
    
  })

  it('should create a new schedule', () => {
    // Given
    const days = new DayNumber(new DayId('2'), []);
    const period = new Period(new Date(), new Date());
    
    // When
    const newSchedule = createScheduleUsecase.create(period, [days])

    // Then
    expect(newSchedule).toBeDefined()
  })
})
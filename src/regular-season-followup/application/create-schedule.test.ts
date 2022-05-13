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
    const days = new DayNumber(new DayId(2), []);
    const today = new Date()
    const startDate = new Date(today.setDate(today.getDate() + 1));
    const endDate = new Date(today.setDate(today.getDate() + 2));
    const period = Period.create(startDate, endDate);
    
    // When
    const createdSchedule = createScheduleUsecase.create(period, [days]);

    // Then
    expect(createdSchedule).toBeDefined();
  })


})
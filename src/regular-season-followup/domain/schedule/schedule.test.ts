import DayId from "./day-id";
import DayNumber from "./day-number";
import { Period } from "../../../shared-kernel/utils/date/period";
import { Schedule } from "./schedule";
import { ScheduleId } from "./schedule-id";

describe(`${Schedule.name}`, () => {
  it("should initiate a new schedule ", () => {
    // Given
    const scheduleId = new ScheduleId(1);
    const days = new DayNumber(new DayId(2), []);
    const date = new Date()
    const startDate = new Date(date.setDate(date.getDate() + 1))
    const endDate = new Date(date.setDate(date.getDate() + 3))
    const period = Period.create(startDate, endDate);

    // When
    const schedule = Schedule.create(scheduleId, period, [days]);

    // Then
    expect(schedule).toBeDefined();
  });
});
 
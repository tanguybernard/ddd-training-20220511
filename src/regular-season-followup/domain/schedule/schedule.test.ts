import DayId from "./day-id";
import DayNumber from "./day-number";
import { Period } from "./period";
import { Schedule } from "./schedule";
import { ScheduleId } from "./schedule-id";

describe(`${Schedule.name}`, () => {
  it("should initiate a new schedule ", () => {
    // Given
    const scheduleId = new ScheduleId(1);
    const days = new DayNumber(new DayId('2'), []);
    const period = new Period(new Date(), new Date());

    // When
    const schedule = Schedule.create(scheduleId, period, [days]);

    // Then
    expect(schedule).toBeDefined();
  });
});

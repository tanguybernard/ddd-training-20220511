import { CreateSchedule } from "./create-schedule"

describe(`${CreateSchedule.name}`, () => {
  let createScheduleUsecase: CreateSchedule;

  beforeEach(() => {
    createScheduleUsecase = new CreateSchedule()
  })

  it('should create a new schedule', () => {
    // Given

    // When
    const newSchedule = createScheduleUsecase.create()

    // Then
    expect(newSchedule).toBeDefined()
  })
})
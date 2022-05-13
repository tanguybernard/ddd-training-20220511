import { Period } from "./period";
import PeriodException from "./period-exception";

describe(`${Period.name}`, ()=>{

  it('should return period instance', ()=> {
    // Given
    const start = new Date('2022-05-14')
    const end = new Date('2022-05-15')

    // When
    const actual = Period.create(start, end)

    // Then
    expect(actual).toBeDefined()
  })

  it('should throw ...', ()=> {
    // Given
    const start = new Date()
    const end = new Date()
    const expected =  "Period invalid";

    // When
    const actual = () => Period.create(start, end)
    
    // Then
    expect(actual).toThrow(expected)
    

  })
})


export default class ScheduleDto{

    constructor(
        public id: number, 
        public startDate: Date, 
        public endDate: Date,
        public dayIds: number[],
        public matchIdsByDayId: Map<number, number[]>
        ){

        }

}
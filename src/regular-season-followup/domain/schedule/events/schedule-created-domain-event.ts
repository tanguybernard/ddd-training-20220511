import { DomainEvent } from "src/shared-kernel/bus/domain-event";
import { ScheduleId } from "../schedule-id";

export default class ScheduleCreatedDomainEvent implements DomainEvent{

    private _eventName: string;

    constructor(
        public scheduleId: ScheduleId, 
        public occuredOn: Date,
        eventName: string
        ) {
            this._eventName = eventName;
    }

    get eventName(): string {
        return this._eventName
    }

}
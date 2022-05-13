import { DomainEvent } from "src/shared-kernel/bus/domain-event";
import EventHandler from "../../../shared-kernel/bus/event-handler";


export default class LoggerSubscriber implements EventHandler{



    handle(event: DomainEvent): void {
        console.log(event.eventName)
    }

}
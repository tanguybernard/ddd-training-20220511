import { DomainEvent } from "src/shared-kernel/bus/domain-event";
import EventBus from "src/shared-kernel/bus/event-bus";
import EventHandler from "src/shared-kernel/bus/event-handler";


export default class InternalEventBus implements EventBus{


    constructor(public subscribers = []){}


    subscribe<T extends EventHandler>(subscriber: T): void{
        this.subscribers.push(subscriber);
    }


    publish(domainEvents: DomainEvent[]): void {
       domainEvents.forEach(event => {

        this.subscribers.forEach(subscriber => {

            subscriber.handle(event)
        })
       })
    }
}
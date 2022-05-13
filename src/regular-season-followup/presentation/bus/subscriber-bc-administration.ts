import {DomainEvent} from "../../../shared-kernel/bus/domain-event";
import EventHandler from "../../../shared-kernel/bus/event-handler";

export class SubscriberBsAdmin implements EventHandler{
    constructor(){
    }

    handle(messageBcAdmin: DomainEvent){

        switch(messageBcAdmin.eventName){
            case "created.team":
                //return new StrategyCreatedTeam()  // call application service(use case)
        }
    }
}

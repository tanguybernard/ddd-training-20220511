import { DomainEntity } from "./domain-entity";
import { ValueObject } from "./value-object";
import { ValueObjectId } from "./value-object-id";

type DomainEvent = any;

export abstract class AggregateRoot<Id> extends DomainEntity<Id> {
  private domainEvents: DomainEvent[] = [];

  public pullDomainEvents(): DomainEvent[] {
    const domainEvents: DomainEvent[] = this.domainEvents;
    this.domainEvents = [];
    return domainEvents;
  }

  protected record(domainEvent: DomainEvent) {
    this.domainEvents.push(domainEvent);
  }
}

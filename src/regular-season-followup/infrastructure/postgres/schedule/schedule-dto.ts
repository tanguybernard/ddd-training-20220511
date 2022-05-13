import {Column, Entity, PrimaryGeneratedColumn, OneToMany} from "typeorm";

@Entity({name: "schedule"})
export default class ScheduleDto {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    start_date: Date

    @Column()
    end_date: Date

    //OneToMany
    //days

}
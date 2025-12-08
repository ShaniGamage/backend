// import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
// import { Sos } from "./sos";

// @Entity()
// export class Contacts {
//     @PrimaryGeneratedColumn()
//     id: number;

//     @Column()
//     userId: string

//     @ManyToOne(() => Sos, sos => sos.contacts, { onDelete: 'CASCADE' })
//     @JoinColumn({ name: 'userId' })
//     sos: Sos;
// }
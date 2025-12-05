//Shape of the data stored in DB
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Sos {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    userId: string

    @Column('float')
    latitude: number

    @Column('float')
    longitude: number

    @Column({ nullable: true })
    address: string

    // @Column({ nullable: true })
    // message: string

    @Column()
    createdAt: Date;

}
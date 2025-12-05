//Shape of the data stored in DB
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable:true})
    userId: string

    @Column()
    postType: string

    @Column()
    description: string

    @Column('boolean')
    anonymous: boolean

    @Column({nullable:true})
    image: string

    @Column()
    createdAt: Date

}
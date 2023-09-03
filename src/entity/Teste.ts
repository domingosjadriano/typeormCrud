import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Teste {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string
}

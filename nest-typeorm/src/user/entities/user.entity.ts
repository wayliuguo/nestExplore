import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'user',
})
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'name',
        type: 'varchar',
        length: 255,
    })
    name: string;
}

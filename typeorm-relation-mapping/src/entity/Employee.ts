import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Department } from "./Department";

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 50,
  })
  name: string;

  @ManyToOne(() => Department, {
    onDelete: 'CASCADE', // 级联删除，当部门被删除时，关联的员工也会被删除
  })
  department: Department;
}

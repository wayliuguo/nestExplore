import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity({
  name: "id_card",
})
export class IdCard {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 50,
    comment: "身份证号",
  })
  cardName: string;

  @JoinColumn()
  @OneToOne(() => User, {
    cascade: true, // 是否级联操作(删除时级联删除关联的user)
    onDelete: "CASCADE", //  "RESTRICT" | "CASCADE" | "SET NULL" | "DEFAULT" | "NO ACTION"
    onUpdate: "CASCADE", //  "RESTRICT" | "CASCADE" | "SET NULL" | "DEFAULT" | "NO ACTION"
  })
  user: User;
}

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { School } from "./School";

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ length: 100, nullable: true })
  firstname?: string;

  @Column({ nullable: true })
  name?: string;

  @Column({ nullable: true })
  birthday?: Date;

  @Column({ nullable: true })
  address?: string;

  @ManyToOne(() => School, (school) => school.students)
  school?: School;

  constructor(
    firstname?: string,
    name?: string,
    birthday?: Date,
    address?: string
  ) {
    this.firstname = firstname;
    this.name = name;
    this.birthday = birthday;
    this.address = address;
  }
}

import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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

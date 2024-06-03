import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { School } from "./School";

@Entity()
export class Language {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ nullable: true })
  name?: string;

  @ManyToMany(() => School, (school) => school.languages)
  @JoinTable()
  schools?: School[];

  constructor(name?: string) {
    this.name = name;
  }
}

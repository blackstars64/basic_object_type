import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
} from "typeorm";
import { Student } from "./Student";
import { Language } from "./Language";

@Entity()
export class School {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ length: 100, nullable: true })
  city?: string;

  @Column({ nullable: true })
  capacity?: number;

  @OneToMany(() => Student, (student) => student.school)
  students?: Student[];

  @ManyToMany(() => Language, (language) => language.schools)
  languages?: Language[];

  constructor(city?: string, capacity?: number) {
    this.city = city;
    this.capacity = capacity;
  }
}

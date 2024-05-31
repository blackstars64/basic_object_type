import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class School {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ length: 100, nullable: true })
  city?: string;

  @Column({ nullable: true })
  capacity?: number;

  constructor(city?: string, capacity?: number) {
    this.city = city;
    this.capacity = capacity;
  }
}

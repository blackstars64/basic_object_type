import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ nullable: true })
  name: string;

  constructor(name: string = "") {
    this.name = name;
  }
}

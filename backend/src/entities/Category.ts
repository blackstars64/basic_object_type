import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Ads } from "./Ads";

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ nullable: true })
  name?: string;

  @OneToMany(() => Ads, (ads) => ads.category)
  ads?: Promise<Ads[]>;

  constructor(name: string = "") {
    this.name = name;
  }
}

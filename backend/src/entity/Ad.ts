import { Field, ID, ObjectType } from "type-graphql";
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";
import { Category } from "./Category";
import { Tag } from "./Tag";

@Entity()
@ObjectType()
export class Ad {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id?: number;

  @Field()
  @Column()
  title!: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  description!: string;

  @Field((type) => Number)
  @Column()
  price!: number;

  @Field({ nullable: true })
  @Column({ nullable: true })
  image!: string;

  @Field(() => Date)
  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt!: Date;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.ads)
  user!: User;

  @Field(() => Category)
  @ManyToOne(() => Category, (category) => category.ads)
  category!: Category;

  @Field(() => [Tag])
  @ManyToMany(() => Tag, (tag) => tag.ads)
  @JoinTable()
  tags!: Tag[];
}

import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  BaseEntity,
  RelationId,
} from "typeorm";
import { Category } from "./Category";
import { Tag } from "./Tag";
import { Field, ID, Int, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Ad extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field((type) => ID)
  id?: number;

  @Column()
  @Field()
  title: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  description?: string;

  @Column({ nullable: true })
  @Field((type) => Int, { nullable: true })
  price?: number;

  @Column({ nullable: true })
  @Field({ nullable: true })
  picture?: string;

  @Column()
  @Field()
  location?: string;

  @Column()
  @Field((type) => Date)
  createdAt?: Date;

  @ManyToOne(() => Category, (category) => category.ads, { eager: true })
  @Field((type) => Category)
  category?: Category;

  @ManyToMany(() => Tag, { cascade: true })
  @JoinTable()
  @Field((type) => [Tag])
  tags?: Promise<Tag[]>;

  @RelationId("tags")
  tagIds?: number[];

  constructor(
    title: string = "",
    description: string | undefined = undefined,
    price?: number,
    picture?: string,
    location?: string,
    createdAt?: Date
  ) {
    super();

    this.title = title;
    this.description = description;
    this.price = price;
    this.picture = picture;
    this.location = location;
    this.createdAt = createdAt;
  }
}

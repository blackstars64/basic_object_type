import {
  Arg,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import { Ad } from "../entities/Ad";
import DataLoader from "dataloader";
import { Tag } from "../entities/Tag";
import { In } from "typeorm";

const tagsDataLoader = new DataLoader((ids) => {
  return Tag.findBy({
    id: In(ids),
  });
});

@Resolver(Ad)
export class AdResolver {
  @FieldResolver()
  async tags(@Root() ad: Ad): Promise<(Tag | Error)[]> {
    if (ad.tagIds == null || ad.tagIds.length == 0) {
      return [];
    }
    return tagsDataLoader.loadMany(ad.tagIds);
  }

  @Query(() => [Ad])
  async ads(): Promise<Ad[]> {
    const ads: Ad[] = await Ad.find({});
    return ads;
  }

  @Query(() => Ad, { nullable: true })
  async ad(@Arg("id") id: number): Promise<Ad | undefined> {
    if (id == null) {
      return undefined;
    }

    const ad: Ad | null = await Ad.findOneBy({ id });
    if (ad == null) {
      throw new Error(`Ad with id ${id} not found`);
    }

    return ad;
  }

  // CREATE
  @Mutation(() => [Ad])
  async createAds(
    @Arg("data")
    { title, description, price, picture, location, category, tags }: Ad
  ): Promise<Ad[]> {
    const ad = new Ad(title, description, price, picture, location);

    if (category === null) {
      throw new Error("Category is required");
    }
    ad.category = category;

    await ad.save();
    return Ad.find();
  }
}

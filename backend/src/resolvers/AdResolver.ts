import { Arg, FieldResolver, Query, Resolver, Root } from "type-graphql";
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

    const adId: number = parseInt(id.toString());

    const ad: Ad | null = await Ad.findOne({ where: { id: adId } });
    if (ad == null) {
      return undefined;
    }

    return ad;
  }

  @Query(() => [Ad])
  async addAds(
    @Arg("title") title: string,
    @Arg("description") description: string,
    @Arg("price") price: number,
    @Arg("picture") picture: string,
    @Arg("location") location: string
  ): Promise<Ad[]> {
    const ad = new Ad(title, description, price, picture, location);
    await ad.save();
    return Ad.find();
  }
}

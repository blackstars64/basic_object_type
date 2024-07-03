// import { Resolver, Query, Mutation, Arg } from "type-graphql";
// import { AppDataSource } from "../data-source";
// import { Ad } from "../entity/Ad";

// const db = AppDataSource.manager;

// @Resolver()
// export class AdResolver {
//   @Query(() => [Ad])
//   async ads(): Promise<Ad[]> {
//     return db.find(Ad);
//   }

//   @Mutation(() => Ad)
//   async createAd(
//     @Arg("title") title: string,
//     @Arg("description") description: string,
//     @Arg("userId") userId: number,
//     @Arg("price") price: number,
//     @Arg("image") image: string,
//     @Arg("categoryId") categoryId: number,
//     @Arg("tags", () => [String]) tags: string[]
//   ): Promise<Ad> {
//     const ad = db.create(Ad, {
//       title,
//       description,
//       price,
//       image,
//       user: { id: userId },
//       category: { id: categoryId },
//       tags: tags.map((name) => ({ name })),
//     });

//     await db.save(ad);
//     return ad;
//   }
// }

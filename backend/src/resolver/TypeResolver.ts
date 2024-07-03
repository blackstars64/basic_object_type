import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Type } from "../entity/Type";
import { User } from "../entity/User";

@Resolver()
export class TypeResolver {
  @Query(() => [Type])
  async types() {
    return Type.find({ relations: ["user"] });
  }

  @Mutation(() => Type)
  async createType(
    @Arg("name") name: string,
    @Arg("userId") userId: number
  ): Promise<Type> {
    const user = await User.findOne({ where: { id: userId } });
    if (!user) {
      throw new Error("User not found!");
    }

    const type = Type.create({ name, users: [user] });
    await type.save();
    return type;
  }
}

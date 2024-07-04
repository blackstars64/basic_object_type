import "reflect-metadata";
import { UserResolver } from "./resolver/UserResolver";
import { AdResolver } from "./resolver/AdResolver";
import { buildSchema } from "type-graphql";
import { CategoryResolver } from "./resolver/CategoryResolver";
import { TagResolver } from "./resolver/TagResolver";

export const createSchema = async () => {
  return buildSchema({
    resolvers: [UserResolver, AdResolver, CategoryResolver, TagResolver],
    validate: false,
  });
};

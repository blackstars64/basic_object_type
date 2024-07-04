import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { AppDataSource } from "./data-source";
import { UserResolver } from "./resolver/UserResolver";
import seed from "./seed";

const startServer = async () => {
  await AppDataSource.initialize();
  await seed();

  const schema = await buildSchema({
    resolvers: [UserResolver],
  });

  const server = new ApolloServer({ schema });

  server.listen({ port: 4000 }, () =>
    console.log("Server is running on http://localhost:4000")
  );
};

startServer();

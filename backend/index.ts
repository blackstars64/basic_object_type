import "reflect-metadata";

import fs from "node:fs";
import { startStandaloneServer } from "@apollo/server/standalone";
import { AdResolver } from "././src/resolvers/AdResolver";
import { ApolloServer } from "@apollo/server";
import { buildSchema } from "type-graphql";
import { dataSource } from "./src/config/db";

const port = 4000;

// -------------------------- DATASOURCE

async function startServerApollo() {
  const schema = await buildSchema({
    resolvers: [AdResolver],
  });

  const server = new ApolloServer({
    schema,
  });

  await dataSource.initialize();

  const { url } = await startStandaloneServer(server, {
    listen: { port },
  });

  console.log(`🚀  Server ready at: ${url}`);
}

startServerApollo();

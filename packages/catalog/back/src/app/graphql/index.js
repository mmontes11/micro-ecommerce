import { ApolloServer } from "apollo-server-express";
import schema from "./schema";
import resolvers from "./resolvers";
import paginators from "./paginators";
import storage from "../storage";

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: { storage, paginators },
});

export default server;

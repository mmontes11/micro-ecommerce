import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    categories(catalogId: ID, catalogKey: String): [Category!]
  }

  type Category {
    id: ID!
    key: String!
    name: String!
  }
`;

import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    catalogs: [Catalog!]
  }

  type Catalog {
    id: ID!
    key: String!
    name: String!
  }
`;

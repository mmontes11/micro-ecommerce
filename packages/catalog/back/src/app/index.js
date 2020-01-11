import express from "express";
import expressWinston from "express-winston";
import apolloServer from "./graphql";
import logger from "../helpers/log";

const app = express();

app.use(
  expressWinston.logger({
    winstonInstance: logger,
    expressFormat: true,
    meta: true,
    colorize: true,
  }),
);

apolloServer.applyMiddleware({ app, path: "/api/graphql" });

export default app;

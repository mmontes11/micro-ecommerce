import express from "express";
import expressWinston from "express-winston";
import logger from "helpers/log";
import cors from "cors";
import apolloServer from "app/graphql"

const app = express();

app.use(
  expressWinston.logger({
    winstonInstance: logger,
    expressFormat: true,
    meta: true,
    colorize: true,
  }),
);

app.use(cors());

apolloServer.applyMiddleware({ app, path: "/api/graphql" });

export default app;

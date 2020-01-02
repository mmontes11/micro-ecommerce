import express from "express";
import { routes } from "front-catalog-common/config";

const router = express.Router();

routes.forEach(r => router.get(r.path, r.handler));

export default router;

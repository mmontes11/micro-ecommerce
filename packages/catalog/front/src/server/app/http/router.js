import express from "express";
import { routes } from "shared/config";

const router = express.Router();

routes.forEach(r => router.get(r.path, r.handler));

export default router;

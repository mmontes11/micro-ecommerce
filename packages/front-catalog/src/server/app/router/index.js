import express from "express";
import catalog from "app/router/catalog";

const router = express.Router();

router.use("/catalog", catalog);

export default router;

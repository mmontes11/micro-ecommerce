import express from "express";
import handle from "app/handler/catalog";

const router = express.Router();

router.get("/:key", handle);

export default router;

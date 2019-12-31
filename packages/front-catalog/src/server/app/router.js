import express from "express";
import handle from "app/handler";

const router = express.Router();

router.get("/catalog/:catalogKey", handle);
router.get("/catalog/:catalogKey/category/:categoryKey", handle);
router.get("/catalog/:catalogKey/category/:categoryKey/product/:productKey", handle);

export default router;

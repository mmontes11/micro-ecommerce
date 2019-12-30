import express from "express";
import handle from "app/http/handler/ssr";

const router = express.Router();

router.get("*", handle);

export default router;

import express from "express";
import handle from "app/http/handler";

const router = express.Router();

router.get("*", handle);

export default router;

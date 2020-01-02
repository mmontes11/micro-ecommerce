import express from "express";
import handle from "server/app/http/handler";

const router = express.Router();

router.get("*", handle);

export default router;

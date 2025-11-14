import { Router } from "express";
import { getToolHandler } from "./tool.controller";

const router = Router();

// GET /tools
router.get("/", getToolHandler);

export default router;

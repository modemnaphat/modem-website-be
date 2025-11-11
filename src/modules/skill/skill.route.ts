import { Router } from "express";
import { getSkillHandler } from "./skill.controller";

const router = Router();

// GET /skills
router.get("/", getSkillHandler);

export default router;

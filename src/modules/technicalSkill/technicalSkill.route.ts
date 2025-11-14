import { Router } from "express";
import { getTechnicalSkillHandler } from "./technicalSkill.controller";

const router = Router();

// GET /technicalSkill
router.get("/", getTechnicalSkillHandler);

export default router;

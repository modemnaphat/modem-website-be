import { Router } from "express";
import { getProjectHandler } from "./project.controller";

const router = Router();

// GET /projects
router.get("/", getProjectHandler);

export default router;

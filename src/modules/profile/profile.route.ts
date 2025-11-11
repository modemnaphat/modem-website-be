import { Router } from "express";
import { getProfileHandler } from "./profile.controller";

const router = Router();

// GET /profile
router.get("/", getProfileHandler);

export default router;

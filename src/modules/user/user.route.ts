import { Router } from "express";
import { getUsersHandler } from "./user.controller";
import { createUserHandler } from "./user.controller";

const router = Router();

// GET /users
router.get("/", getUsersHandler);
// POST /users
router.post("/", createUserHandler);

export default router;

import { Router } from "express";
import { getContactHandler } from "./contact.controller";
import { createContactHandler } from "./contact.controller";

const router = Router();

// GET /contacts
router.get("/", getContactHandler);
// POST /contacts
router.post("/", createContactHandler);

export default router;

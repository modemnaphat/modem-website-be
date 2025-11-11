import { Request, Response, NextFunction } from "express";
import * as contactService from "./contact.service";

export const getContactHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const contacts = await contactService.getContact();
    res.json(contacts);
  } catch (error) {
    next(error);
  }
};

export const createContactHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, name, company, message, tel } = req.body;

    // ✅ Validate email
    if (!email || typeof email !== "string") {
      return res.status(400).json({ message: "Email is required" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    // ✅ Validate name
    if (!name || typeof name !== "string") {
      return res.status(400).json({ message: "Name is required" });
    }

    const userContact = await contactService.createContact({
      email,
      name,
      tel,
      company,
      message,
    });
    return res.status(201).json(userContact);
  } catch (error: any) {
    next(error);
  }
};

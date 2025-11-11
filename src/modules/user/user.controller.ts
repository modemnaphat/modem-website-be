import { Request, Response, NextFunction } from "express";
import * as userService from "./user.service";

export const getUsersHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await userService.getUsers();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

export const createUserHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, name } = req.body;

    // validate ง่ายๆ
    if (!email || typeof email !== "string") {
      return res.status(400).json({ message: "email is required" });
    }

    const user = await userService.createUser({ email, name });
    return res.status(201).json(user);
  } catch (error: any) {
    if (error.code === "P2002") {
      return res.status(409).json({ message: "Email already exists" });
    }
    next(error);
  }
};

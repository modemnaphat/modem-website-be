import { Request, Response, NextFunction } from "express";
import * as profileService from "./profile.service";

export const getProfileHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await profileService.getProfile();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

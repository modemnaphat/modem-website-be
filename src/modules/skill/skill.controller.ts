import { Request, Response, NextFunction } from "express";
import * as skillService from "./skill.service";

export const getSkillHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const skills = await skillService.getSkill();
    res.json(skills);
  } catch (error) {
    next(error);
  }
};

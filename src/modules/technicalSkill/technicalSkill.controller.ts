import { Request, Response, NextFunction } from "express";
import * as technicalSkillService from "./technicalSkill.service";

export const getTechnicalSkillHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const technicalSkills = await technicalSkillService.getTechnicalSkill();
    res.json(technicalSkills);
  } catch (error) {
    next(error);
  }
};

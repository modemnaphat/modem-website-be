import { Request, Response, NextFunction } from "express";
import * as projectService from "./project.service";

export const getProjectHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const projects = await projectService.getProject();
    res.json(projects);
  } catch (error) {
    next(error);
  }
};

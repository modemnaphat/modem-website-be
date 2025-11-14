import { Request, Response, NextFunction } from "express";
import * as toolService from "./tool.service";

export const getToolHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const tools = await toolService.getTool();
    res.json(tools);
  } catch (error) {
    next(error);
  }
};

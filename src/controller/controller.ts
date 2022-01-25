import { Request, Response, NextFunction } from "express";
import HttpException from "../util/HttpException";
export const getIndex = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    message: "Hy",
  });
};
export const getError = (req: Request, res: Response) => {
  throw new HttpException();
};

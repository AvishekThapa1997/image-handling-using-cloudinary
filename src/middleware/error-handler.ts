import { Request, Response, NextFunction } from "express";
import HttpException from "../errors/HttpException";
const errorMiddleware = (
  error: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(error);
  res.status(error.statusCode).json({
    message: error.message,
  });
};
export default errorMiddleware;

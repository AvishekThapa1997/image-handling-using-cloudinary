import { Request, Response, NextFunction } from "express";
import asyncWrapper from "../../middleware/async-wrapper";
import { mergePath } from "../../util/util";
import cloudinary from "../../config/file/imageUploadConfig";

export const getLoginForm = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const viewPath = mergePath(["auth", "login"]);
    const options = {
      pageTitle: "Login",
    };
    res.status(200).render(viewPath, options);
  }
);

export const getRegisterForm = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const viewPath = mergePath(["auth", "register"]);
    const options = {
      pageTitle: "Register",
    };
    res.status(200).render(viewPath, options);
  }
);

export const postLoginForm = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {}
);

export const postRegisterForm = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json(req.imageUploadResult);
  }
);

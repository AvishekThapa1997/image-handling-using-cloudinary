import { NextFunction, Request, Response } from "express";
import asyncWrapper from "./async-wrapper";
import cloudinary from "../config/file/imageUploadConfig";
import { unlink } from "fs/promises";
import { ImageUploadResult } from "../model/ImageUploadResult";
const uploadImage = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    if (!req.files) {
      return next();
    }
    const imageResults: ImageUploadResult[] = [];
    const files = req.files as Express.Multer.File[];
    for (let i = 0; i < files.length; i++) {
      const uploadResponse = await cloudinary.uploader.upload(
        files.at(i)?.path!,
        {
          folder: "users",
        }
      );
      imageResults.push({
        publicId: uploadResponse.public_id,
        imageUrl: uploadResponse.secure_url,
      });
      await unlink(files.at(i)?.path!);
    }
    req.imageUploadResult = imageResults;
    next();
  }
);
export default uploadImage;

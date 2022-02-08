import { ImageUploadResult } from "../../model/ImageUploadResult";

declare module "express-serve-static-core" {
  export interface Request {
    imageUploadResult?: ImageUploadResult[];
  }
}

export default {};

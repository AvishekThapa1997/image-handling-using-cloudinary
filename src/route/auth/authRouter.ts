import { Router } from "express";
import {
  getLoginForm,
  getRegisterForm,
  postLoginForm,
  postRegisterForm,
} from "../../controller/auth/authController";
import uploadImage from "../../middleware/imageUpload";
import multerConfig from "../../config/file/imageStorageConfig";
const authRouter = Router();
authRouter.route("/auth/login").get(getLoginForm).post(postLoginForm);
authRouter
  .route("/auth/register")
  .get(getRegisterForm)
  .post(multerConfig.array("profilePic", 8), uploadImage, postRegisterForm);

export default authRouter;

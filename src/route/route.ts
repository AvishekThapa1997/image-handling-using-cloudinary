import { Router } from "express";
import { getIndex, getError } from "../controller/controller";
const router = Router();
router.get("/", getIndex);
router.get("/error", getError);
export default router;

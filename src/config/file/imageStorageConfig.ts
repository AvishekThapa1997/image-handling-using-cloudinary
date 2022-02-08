import multer from "multer";
import { mergePath } from "../../util/util";
const storage = multer.diskStorage({
  filename: (_req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
  destination: (_req, file, cb) => {
    cb(null, mergePath([__dirname, "..", "..", "..", "images"]));
  },
});
export default multer({
  storage,
});

import express from "express";
import errorMiddleware from "./middleware/error-handler";
import notFoundMiddleware from "./middleware/not-found";
import "./config/environment/environment";
import { mergePath } from "./util/util";
import authRouter from "./route/auth/authRouter";
const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static(mergePath([__dirname, "..", "public"])));
app.set("view engine", "ejs");
app.set("views", mergePath([__dirname, "views"]));
app.use("/api/v1", authRouter);
app.use(notFoundMiddleware);
app.use(errorMiddleware);
export default app;

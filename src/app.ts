import express from "express";
import router from "./route/route";
import errorMiddleware from "./middleware/errorMiddleware";
import notFoundMiddleware from "./middleware/404";
const app = express();
app.use(router);
app.use(notFoundMiddleware);
app.use(errorMiddleware);
app.listen(process.env.PORT || 3000);

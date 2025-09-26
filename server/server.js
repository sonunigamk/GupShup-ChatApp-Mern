import dotenv from "dotenv";
dotenv.config();
import express from "express";
import userRoute from "./routes/user.route.js";
import connectDB from "./db/connectDB.js";

import cookieParser from "cookie-parser";

connectDB();

const app = express();
app.use(express.json());
app.use(cookieParser())

const PORT = process.env.PORT || 5000;

app.use("/api/v1/user", userRoute);


//middlewares
import { errorMiddleware } from "./middlewares/error.js";
app.use(errorMiddleware);

app.listen(PORT, () => console.log(`server is listing on port  ${PORT}`));

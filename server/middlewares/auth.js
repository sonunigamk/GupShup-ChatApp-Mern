import { asyncHandler } from "../utilities/asyncHandler.js";
import { errorHandler } from "../utilities/erroHandler.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = asyncHandler(async (req, res, next) => {
  const token =
    req.cookies.token || req.headers["authorization"]?.replace("Bearer", "");

  if (!token) {
    return next(new errorHandler("Invalid Token", 401));
  }

  const tokenData = jwt.verify(token, process.env.JWT_SECRET);
 
  req.user = tokenData;
  next();
});

import User from "../models/user.model.js";
import { asyncHandler } from "../utilities/asyncHandler.js";
import { errorHandler } from "../utilities/erroHandler.js";

export const register = asyncHandler(async (req, res, next) => {
  const { fullName, username, password, gender } = req.body;

  if (!fullName || !username || !password || !gender) {
    return next(new errorHandler("All fields are required", 400));
  }

  const user = await User.findOne({ username });
  if (user) {
    return next(new errorHandler("user already exist", 400));
  }

  const avatarType = gender === "male" ? "boy" : "girl";
  const avatar = `https://avatar.iran.liara.run/public/${avatarType}?username=${username}`;

  const newUser = await User.create({
    username,
    fullName,
    password,
    gender,
    avatar,
  });

  res.status(200).json({
    success: true,
    responseData: {
      newUser,
    },
  });
});

export const login = (req, res) => {
  res.send("calling from the user controller js file");
};

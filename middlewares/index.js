import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { User } from "../models/index.js";
dotenv.config();
const showError = (error, next) => {
  next({
    message: "Problem While Processing request",
    status: 400,
  });
};

const auth = async (req, res, next) => {
  if (
    "authorization" in req.headers &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    const token = req.headers.authorization.split(" ").pop();
    try {
      const decoded = jwt.verify(token, "done");
      req.uid = decoded.uid;
      req.user = await User.findById(decoded.id);
      next();
    } catch (error) {
      next({
        message: "Invalid token.",
        status: 401,
      });
    }
  } else {
    next({
      message: "Token missing",
      status: 401,
    });
  }
};

export { showError, auth };

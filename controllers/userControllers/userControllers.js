import { showError } from "../../middlewares/index.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../../models/index.js";
import dotenv from "dotenv";
dotenv.config();

class UserController {
  register = async (req, res, next) => {
    const { name, email, password } = req.body;
    try {
      const hash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
      await User.create({ name, email, password: hash });
      res.json({
        success:
          "Thank You for registering Please login to access your account",
      });
    } catch (err) {
      showError(err, next);
    }
  };

  login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      console.log(user);
      if (user) {
        if (bcrypt.compareSync(password, user.password)) {
          const token = jwt.sign(
            {
              id: user._id,
              iat: Math.floor(Date.now() / 1000) - 30,
              exp: Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60,
            },
            "done"
          );
          res.json({
            token,
            user,
          });
        } else {
          next({
            message: "Incorrect password",
            status: 422,
          });
        }
      } else {
        next({
          message: "Given email is not registered",
          status: 422,
        });
      }
    } catch (error) {
      showError(error, next);
    }
  };
}

export default new UserController();

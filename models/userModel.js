import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name should not be empty"],
    },
    email: {
      type: String,
      required: [true, "email should not be empty"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password should not be empty"],
    },
  },
  {
    timestamps: true,
    autoIndex: true,
    autoCreate: true,
  }
);

const User = model("User", userSchema);
export default User;

import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  },
  {
    timestamps: true,
    autoIndex: true,
    autoCreate: true,
  }
);

const Todo = model("Todo", userSchema);
export default Todo;

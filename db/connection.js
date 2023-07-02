import mongoose from "mongoose";
async function connection() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/todo");
    console.log("connected to MongoDB ");
  } catch (err) {
    console.error(err);
  }
}

export default connection;

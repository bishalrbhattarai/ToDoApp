import { Router } from "express";
import userRoutes from "./userRoutes/userRoutes.js";
import todoRoutes from "./todoRoutes/todoRoutes.js";
import { auth } from "../middlewares/index.js";
const router = Router();

router.use("/users", userRoutes);
router.use("/todo", auth, todoRoutes);

export default router;

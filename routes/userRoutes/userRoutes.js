import { Router } from "express";
import UserCtrl from "../../controllers/userControllers/userControllers.js";

const router = Router();

router.post("/register", UserCtrl.register);
router.post("/login", UserCtrl.login);

export default router;

import { Router } from "express";
const router = Router();

import TodoCtrl from "../../controllers/todoControllers/todoControllers.js";
router.get("/", TodoCtrl.index);
router.get("/:id", TodoCtrl.show);
router.post("/", TodoCtrl.store);
router.patch("/:id", TodoCtrl.update);
router.delete("/:id", TodoCtrl.destroy);

export default router;

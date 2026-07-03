import { Router } from "express";
import projectController from "../controllers/project.controller.js"
import authMiddleware from "../middlewares/auth.middleware.js"
const router=Router()

router.get("/", projectController.getAll)
router.get("/featured", projectController.getFeatured)
router.get("/:id", projectController.getById)
router.post("/", authMiddleware, projectController.create)
router.put("/:id", authMiddleware, projectController.update)
router.delete("/:id", authMiddleware, projectController.delete)

export default router

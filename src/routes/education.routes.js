import { Router } from "express";
const router=Router()
import EducationController from "../controllers/Education.controller.js";
router.get("/", EducationController.getAll)

export default router
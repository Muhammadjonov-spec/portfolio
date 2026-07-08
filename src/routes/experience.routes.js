import { Router } from "express";
import ExperienceController from "../controllers/Experience.controller.js";
const router=Router()

router.get("/", ExperienceController.getAll)

export default router
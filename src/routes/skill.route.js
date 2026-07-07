import { Router } from "express";
import SkillController from "../controllers/Skill.controller.js";
const router=Router()

router.get("/", SkillController.getAll)

export default router
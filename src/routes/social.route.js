import { Router } from "express";
const router=Router()
import SocialController from "../controllers/Social.controller.js";

router.get("/", SocialController.getAll)

export default router
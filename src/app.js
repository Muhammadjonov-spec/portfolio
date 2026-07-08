import express from"express"
import path from "path"
import { fileURLToPath } from "url"
import sessionConfig from "./config/session.js"
import {adminRouter} from "./config/adminjs.js"
import authRoutes from "./routes/auth.route.js"
import projectRoutes from "./routes/project.route.js"
import notFound from "./middlewares/notFound.js"
import errorHandler from "./middlewares/errorHandler.js"
import skillRoutes from "./routes/skill.route.js"
import experienceRoutes from "./routes/experience.routes.js"
import educationRoutes from "./routes/education.routes.js"
import socialRoutes from "./routes/social.route.js"
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app=express()
app.use(express.json())
app.use(sessionConfig)
app.use( "/uploads", express.static( path.join(__dirname, "../uploads")))
app.use("/admin", adminRouter)
app.use("/api/auth", authRoutes)
app.use("/api/projects", projectRoutes)
app.use("/api/skills", skillRoutes)
app.use("/api/experiences", experienceRoutes)
app.use("/api/educations", educationRoutes)
app.use("/api/social", socialRoutes)
app.use(notFound)
app.use(errorHandler)
export default app
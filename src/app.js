import express from"express"
import sessionConfig from "./config/session.js"
import {adminRouter} from "./config/adminjs.js"
import authRoutes from "./routes/auth.route.js"
import notFound from "./middlewares/notFound.js"
import errorHandler from "./middlewares/errorHandler.js"

const app=express()
app.use(express.json())
app.use(sessionConfig)
app.use("/admin", adminRouter)
app.use("/api/auth", authRoutes)
app.use(notFound)
app.use(errorHandler)
export default app
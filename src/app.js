import express from"express"
import notFound from "./middlewares/notFound.js"
import errorHandler from "./middlewares/errorHandler.js"
import authRoutes from "./routes/auth.route.js"
const app=express()
app.use(express.json())
app.use("/api/auth", authRoutes)
app.use(notFound)
app.use(errorHandler)
export default app
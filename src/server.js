import dotenv from "dotenv"
dotenv.config()
import app from "./app.js"
import connectDB from "./config/dataBase.js"
import adminSeeder from "./seeds/admin.seed.js"
const PORT = process.env.PORT || 5000
const bootstrap=async()=>{
try {
  await connectDB()
  await adminSeeder()
  app.listen(PORT, ()=>{
  console.log(`server running on ${PORT} port`)
})
} catch (error) {
  console.log(error)
}
  
}

bootstrap()

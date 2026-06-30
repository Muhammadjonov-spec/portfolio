import bcrypt from "bcrypt"
import User from "../models/User.model.js"
import ROLES from "../constants/roles.js"

const adminSeeder=async()=>{
  try {
    const adminExists=await User.findOne({role:ROLES.SUPER_ADMIN, isDeleted:false})
    if(adminExists){
       console.log("Super Admin already exists.")
       return
    }
    const hashedPassword=await bcrypt.hash( process.env.ADMIN_PASSWORD,10)
    await User.create({
            firstName: process.env.ADMIN_FIRST_NAME,
            lastName: process.env.ADMIN_LAST_NAME,
            userName: process.env.ADMIN_USERNAME,
            email: process.env.ADMIN_EMAIL,
            password: hashedPassword,
            role: ROLES.SUPER_ADMIN})
     console.log("Super Admin created successfully.")
  } catch (error) {
     console.error("Admin Seeder Error")
        console.error(error)
        process.exit(1)
  }
}

export default adminSeeder

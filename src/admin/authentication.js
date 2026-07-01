import bcrypt from "bcrypt"
import authService from "../services/auth.service.js"

const authentication={
  authenticate:async(email, password)=>{
    return await authService.validateAdmin(email, password)
     
  },
   cookieName: "portfolio_admin",
   cookiePassword:process.env.SESSION_SECRET
}

export default authentication
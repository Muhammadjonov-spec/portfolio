import asyncHandler from "../middlewares/asyncHandler.js"
import AuthService from "../services/auth.service.js"
class AuthController{
  login=asyncHandler(async(req,res)=>{
    const {email, password}=req.body
    const result=await AuthService.login(email, password)
    res.status(200).json({
      success:true, date:result
    })
  })
}
export default new AuthController()
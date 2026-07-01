import jwt from "jsonwebtoken"
import ApiError from "../utils/ApiError.js"
import UserRepository from "../repositories/User.repository.js" 

const authMiddleware=async(req, res, next)=>{
  try {
    const authorization=req.headers.authorization
    if (!authorization || !authorization.startsWith("Bearer ")) {
            return next(new ApiError(401, "Unauthorized"))
        }
    const token=authorization.split(" ")[1]
    const decoded=jwt.verify(token, process.env.JWT_SECRET)
    const user=await UserRepository.findById(decoded.id)
    if(!user){
      return next(new ApiError(401, "User not found"))
    }
    req.user=user
    next()
  } catch (error) {
    next(new ApiError(401, "Invalid token"))
  }
}
export default authMiddleware
import bcrypt from "bcrypt"
import UserRepository from "../repositories/User.repository.js"
import ApiError from "../utils/ApiError.js"
import { generateAccessToken } from "../utils/jwt.js"

class AuthService{
  async login(email, password){
    const user=await UserRepository.findByEmail(email)
    if (!user) {
            throw new ApiError(401, "Email or password is false")
        }
    const isMatch=await bcrypt.compare(password, user.password)
    if (!user) {
            throw new ApiError(401, "Email or password is false")
        }
    await UserRepository.updateLastLogin(user._id)
    const token=generateAccessToken({id: user._id, role: user.role})
    user.password=undefined
    return {user, token}
  }
}

export default new AuthService()
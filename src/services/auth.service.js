import bcrypt from "bcrypt"
import UserRepository from "../repositories/User.repository.js"
import ApiError from "../utils/ApiError.js"
import { generateAccessToken } from "../utils/jwt.js"
import User from "../models/User.model.js"
import { use } from "react"

class AuthService{
  async validateAdmin(email, password){
    const user=await UserRepository.findByEmail(email)
    if(!user){return null}
    const isMatch=await bcrypt.compare(password, user.password)
    if(!isMatch){return null}
    if(user.isDeleted){
      return null
    }
    await UserRepository.update(user._id, {lastLogin:new Date()})
    user.password=undefined
    return user
  }
  async login(email, password){
    const user=await this.validateAdmin(email, password)
    if(!user){throw new ApiError(401, "Email or password false")}
    const token=generateAccessToken({id: user._id, role: user.role})
    return {user, token}
  }
}

export default new AuthService()
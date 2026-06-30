import BaseRepository from "./Base.repository.js"
import User from "../models/User.model.js"

class UserRepository extends BaseRepository{
  constructor(){
    super(User)
  }
  async findByEmail(email){
    return await this.model.findOne({email, isDeleted:false}).select("+password")
  }
  async updateLastLogin(id){
    return await this.model.findByIdAndUpdate(id,
      { lastLogin: new Date()}, {new:true}
    )
  }
}
export default new UserRepository()
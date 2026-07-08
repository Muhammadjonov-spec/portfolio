import BaseRepository from "./Base.repository.js";
import Social from "../models/Social.model.js";

class SocialRepository extends BaseRepository{
  constructor(){
    super(Social)
  }
  async findByName(name){
    return await this.findOne({name})
  }
}

export default new SocialRepository()
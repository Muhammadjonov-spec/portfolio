import SocialRepository from "../repositories/Social.repository.js";
import SlugService from "./slug.service.js";
class SocialService{
  async getAll(){
    return await SocialRepository.find(
      {published:true}, {sort:{sortOrder:1}}
    )
  }
  async create(data, userId){
    return await SocialRepository.create({
      ...data, createBy:userId, updatedBy:userId
    })
  }
  async update(id, data, userId){
    data.updatedBy=userId
    return await SocialRepository.update(id, data)
  }
}

export default new SocialService()
import ExperienceRepository from "../repositories/Experience,repository.js";
import SlugService from "./slug.service.js";

class ExperienceService{
  async getAll(){
    return await ExperienceRepository.find(
      {published:true}, {sort:{sortOrder:1}}
    )
  }
  async create(data, userId){
    const slug=await SlugService.generate(data.company, ExperienceRepository)
    return await ExperienceRepository.create({
      ...data, slug, createdBy:userId, updatedBy:userId
    })
  }
  async update(id, data, userId){
    if(data.company){
      data.slug=await SlugService.generate(data.company, ExperienceRepository, id)
    }
    data.updatedBy=userId
    return await ExperienceRepository.update(id, data)
  }
}

export default new ExperienceService()
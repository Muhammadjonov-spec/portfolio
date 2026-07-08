import EducationRepository from "../repositories/Education.repository.js";
import SlugService from "./slug.service.js";

class EducationService{
  async getAll(){
    return await EducationRepository.find({published:true}, {sort:{sortOrder:1}})
  }
  async create(data, userId){
    const slug=await SlugService.generate(data.institution, EducationRepository)
    return await EducationRepository.create({...data, slug, createdBy:userId, updatedBy:userId})
  }
  async update(id, data, userId){
    if(data.institution){
      data.slug=await SlugService.generate(data.institution, EducationRepository, id)
    }
    data.updatedBy=userId
    return await EducationRepository.update(id, data)
  }
}

export default new EducationService()
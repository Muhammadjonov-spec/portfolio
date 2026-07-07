import SlugService from "./slug.service.js"
import SkillRepository from "../repositories/Skill.repository.js"

class SkillService{
  async getAll(){
    return await SkillRepository.find({published:true}, sort({sortOrder: 1}))
  }
  async create(data, userId){
    const slug=await SlugService.generate(data.name, SkillRepository )
    return await SkillRepository.create({...data, slug, createBy:userId, updateBy:userId})
  }
  async update(id, data, userId){
    if(data.name){
      data.slug=await SlugService.generate(data.name, SkillRepository, id)
    }
    data.updateBy=userId
    return await SkillRepository.update(id, data)
  }

}
export default new SkillService
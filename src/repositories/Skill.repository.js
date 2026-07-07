import BaseRepository from "./Base.repository.js"
import Skill from "../models/Skill.model.js"

class SkillRepository extends BaseRepository{

  constructor(){
    super(Skill)
  }

  async findBySlug(slug){
    return await this.findOne({slug})
  }
}

export default new SkillRepository()
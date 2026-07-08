import Experience from "../models/Experience.model.js"
import BaseRepository from "./Base.repository.js"

class ExperienceRepository extends BaseRepository{
  constructor(){
    super(Experience)
  }
  async findBySlug(slug){
    return await this.findOne({slug})
  }

}

export default new ExperienceRepository()
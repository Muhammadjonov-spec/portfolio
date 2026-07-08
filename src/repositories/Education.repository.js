import BaseRepository from "./Base.repository.js";
import Education from "../models/Education.model.js";

class EducationRepository extends BaseRepository{
  constructor(){
    super(Education)
  }
  async findBySlug(slug){
    return await this.findOne({slug})
  }
}

export default new EducationRepository()
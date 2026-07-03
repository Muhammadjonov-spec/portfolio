import BaseRepository from "./Base.repository.js";
import Project from "../models/Project.model.js";

class ProjectRepository extends BaseRepository{
  constructor(){
    super(Project)
  }
  async findBySlug(slug){
    return await this.model.findOne({slug, isDeleted:false})
  }
  async getFeaturedProjects(){
    return await this.model.find({ featured:true, published: true, isDeleted: false}).sort({sortOrder:1, projectDate: -1})
  }
}

export default new ProjectRepository()

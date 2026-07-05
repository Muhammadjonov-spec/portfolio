import slugify from "slugify"
import ApiError from "../utils/ApiError.js"
import ProjectRepository from "../repositories/Project.repository.js"
import slugService from "./slug.service.js"
class ProjectService{
  async create(data, userId){
    const slug=await slugService.generate(data.title, ProjectRepository)
    
    return await ProjectRepository.create({...data, slug, createdBy: userId, updatedBy: userId,})
  }

  async getAll(){
    return await ProjectRepository.find(
      {published:true},
      {sort:{sortOrder: 1, projectDate: -1,}}
    )
  }
  async getFeatured(){
    return await ProjectRepository.getFeaturedProjects()
  }
  async getBySlug(slug){
    return await ProjectRepository.findOne({slug, published:true})
  }
  async getById(id){
    const project=await ProjectRepository.findById(id)
    if(!project){throw new ApiError(404, "Project not found.")}
    return project
  }
   async update(id, data, userId){
    const project=await ProjectRepository.findById(id)
    if(!project){throw new ApiError(404, "Project not found.")}
    if(data.title && data.title!==project.title){
     data.slug=await slugService.generate(data.title, ProjectRepository, id)
      
    }
    data.updatedBy=userId
    return await ProjectRepository.update(id, data)
   }
  async delete(id, userId){
    const project=await ProjectRepository.findById(id)
    if(!project){throw new ApiError(404, "Project not found.")}
    return await ProjectRepository.softDelete(id, userId)
  }
}

export default new ProjectService()
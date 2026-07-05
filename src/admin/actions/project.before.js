import slugService from "../../services/slug.service.js"
import ProjectRepository from "../../repositories/Project.repository.js"

const projectBeforeHook = async (request, context) =>{
  if(request.method==="post"){
    if(request.payload.title){
      request.payload.slug = await slugService.generate(
        request.payload.title,
        ProjectRepository,
        context?.record?.id() || context?.record?.params?._id
      )
    }
    if(context.currentAdmin){
      request.payload.updatedBy =context.currentAdmin._id
      if(!request.payload.createdBy){
        request.payload.createdBy=context.currentAdmin._id
      }
    }
  }
  return request
}

export default projectBeforeHook
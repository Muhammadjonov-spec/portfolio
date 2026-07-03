import slugify from "slugify"
const projectBeforeHook = async (request, context) =>{
  if(request.method==="post" && context.currentAdmin){
    request.payload.updatedBy=context.currentAdmin._id
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
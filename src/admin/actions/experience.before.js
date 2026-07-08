const experienceBeforeHook=async(request, context)=>{
  if(request.method==="post" && context.currentAdmin){
    request.payload.updatedBy=context.currentAdmin._id
    if(!request.payload.createdBy){
      request.payload.createdBy=context.currentAdmin._id
    }
  }
  return request
}

export default experienceBeforeHook
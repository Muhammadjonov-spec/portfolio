import EducationService from "../../services/education.service.js";

const educationAfterHook=async(response, request, context)=>{
  if(!response.record){
    return response
  }
  const id=response.record.params._id
  if(request.method){
    await EducationService.update(id, response.record.params, context.currentAdmin._id)
  }
  return response
}

export default educationAfterHook
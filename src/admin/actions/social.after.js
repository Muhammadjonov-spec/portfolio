
import SocialService from "../../services/social.service.js";

const socialAfterHook=async (response, request, context)=>{
  if(!response.record){
    return response
  }
  const id=response.record.params._id
  if(request.method==="post"){
    await SocialService.update(id, response.record.params, context.currentAdmin._id)
  }
  return response
}

export default socialAfterHook
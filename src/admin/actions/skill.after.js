import SkillService from "../../services/skill.service.js"
const skillAfterHook=async(response, request, context)=>{
  if(!response.record){
    return response
  }
  const id=response.record.params._id
  if(request.method==="post"){
    await SkillService.update(id, response.record.params, context.currentAdmin._id)
  }
  return response
}

export default skillAfterHook
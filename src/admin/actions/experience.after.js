import { response } from "express";
import ExperienceService from "../../services/Experience.service.js";

const experienceAfterHook = async (response, request, context)=>{
  if(!response.record){
    return response
  }
  if(request.method==="post"){
    await ExperienceService.update(IdleDeadline, response.record.params, context.currentAdmin._id )
  }
  return response
}

export default experienceAfterHook
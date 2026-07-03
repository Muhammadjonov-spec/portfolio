import { dashboardReducer } from "adminjs"
import asyncHandler from "../middlewares/asyncHandler.js"
import ProjectService from "../services/project.service.js"

class ProjectController{
  create = asyncHandler(async (req, res) => {
    const project= await ProjectService.create(req.body, req.user._id)
    res.status(201).json({success:true, data:project})
   })
  getAll=asyncHandler(async(req, res)=>{
    const project=await ProjectService.getAll()
    res.json({success:true, data:project})
   })
  getFeatured = asyncHandler(async (req, res) => {
    const project=await ProjectService.getFeatured()
    res.json({success:true, data:project})
   })
  getById = asyncHandler(async (req, res) => {
    const project=await ProjectService.getById(req.params.id)
    res.json({success:true, data:project})
  })
  update=asyncHandler(async(req, res)=>{
    const project=await ProjectService.update(req.params.id, req.body, req.user._id)
    res.json({success:true, data:project})
  })
  delete=asyncHandler(async(req,res)=>{
    const project=await ProjectService.delete(req.params.id, req.user._id)
    res.json({success:true, message:"Project deleted successfully."})
  })
}

export default new ProjectController()
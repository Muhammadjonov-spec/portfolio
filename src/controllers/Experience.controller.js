import ExperienceService from "../services/Experience.service.js";

class ExperienceController{
  async getAll(req, res, next){
    try {
      const experiences=await ExperienceService.getAll()
      return res.status(200).json({success:true, data:experiences})
    } catch (error) {
      next(error)
    }
  }
}

export default new ExperienceController()
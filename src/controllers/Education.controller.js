import EducationService from "../services/education.service.js";
class EducationController{
  async getAll(req, res, next){
    try {
      const education=await EducationService.getAll()
      return res.status(200).json({success:true, data:education})
    } catch (error) {
      next(error)
    }
  }
}

export default new EducationController()
import SkillService from "../services/skill.service.js";

class SkillController {
  async getAll(req, res, next){
    try {
      const skills= await SkillService.getAll()
      return res.status(200).json({success:true, data:skills})
    } catch (error) {
      next(error)
    }
  }
}

export default new SkillController()
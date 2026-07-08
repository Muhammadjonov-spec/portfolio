import SocialService from "../services/social.service.js";

class SocialController {
  async getAll(req, res, next){
    try {
       const social=await SocialService.getAll()
       return res.status(200).json({success:true, data:social})
    } catch (error) {
        next(error)
    }
  }
}

export default new SocialController()
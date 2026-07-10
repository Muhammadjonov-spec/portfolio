import BaseRepository from "./Base.repository.js";
import SettingTranslation from "../models/SettingTranslation.model.js";

class SettingTranslationRepository extends BaseRepository {
  constructor(){
    super(SettingTranslation)
  }
  async findByLanguage(settingId, language){
    return await this.findOne({settingId, language})
  }
  async findAll(settingId){
    return await this.find({settingId})
  }
}
export default new SettingTranslationRepository()
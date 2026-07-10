import SettingTranslationRepository from "../repositories/SettingTranslation.repository.js";
class SettingTranslationService{
  async getAll(settingId){
    return await SettingTranslationRepository.findAll(settingId)
  }
  async get(settingId, language){
    return await SettingTranslationRepository.findByLanguage({settingId, language})
  }
  async create(data){
    return await SettingTranslationRepository.create(data)
  }
  async update(id, data){
    return await SettingTranslationRepository.update(id, data)
  }
}

export default new SettingTranslationService()
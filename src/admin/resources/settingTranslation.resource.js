import SettingTranslation from "../../models/SettingTranslation.model.js";
import navigation from "../helpers/navigation.js";
import properties from "../helpers/navigation.js"

const settingTranslationResource={
  resource:SettingTranslation,
  options:{
    navigation:navigation.settings,
    listProperties: ["settingId", "language", "siteTitle", "profession"],
    filterProperties:["language"],
    editProperties: [ "settingId", "language", "siteTitle", "siteDescription", "profession", "heroTitle", "heroSubtitle", "shortBio", "longBio"],
    showProperties: [ "settingId", "language", "siteTitle", "siteDescription", "profession", "heroTitle", "heroSubtitle", "shortBio", "longBio", "createdAt", "updatedAt"],
    properties: {
      language: {
        availableValues: [
          {value: "uz", label: "🇺🇿 Uzbek"}, 
          {value: "ru", label: "🇷🇺 Russian"},
          {value: "en", label: "🇺🇸 English"}],
            },
            ...properties
          }
  }
}

export default settingTranslationResource
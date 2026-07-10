import Setting from "../../models/Setting.model.js"
import properties from "../helpers/commonProperties.js"
import navigation from "../helpers/navigation.js"
import SkillBeforeHook from "../actions/skill.before.js"
import createUploadFeature from "../features/upload/uploadOptions.js"
import settingAfterHook from "../actions/setting.after.js"


const settingResource={
  resource:Setting,
  features: [
    createUploadFeature("uploads/avatar", "avatar"),
    createUploadFeature("uploads/hero", "heroImage"),
    createUploadFeature("uploads/resume", "resume")
  ],
  options:{
    navigation:navigation.settings,
    actions:{ 
      new:{ before:SkillBeforeHook, after:settingAfterHook},
      edit:{ before:SkillBeforeHook, after:settingAfterHook}
    },
    listProperties:["phone", "email", "defaultLanguage"],
    editProperties:["avatar", "resume", "heroImage", "phone", "email", "address", "mapUrl", "defaultLanguage", "maintenanceMode", "siteTitleUz", "siteDescriptionUz", "professionUz", "heroTitleUz", "heroSubtitleUz", "shortBioUz", "longBioUz", "siteTitleRu", "siteDescriptionRu", "professionRu", "heroTitleRu", "heroSubtitleRu", "shortBioRu", "longBioRu", "siteTitleEn", "siteDescriptionEn", "professionEn", "heroTitleEn", "heroSubtitleEn", "shortBioEn", "longBioEn"],
    properties:{
      siteTitleUz: {type: "string"},
      siteDescriptionUz: {type: "textarea"},
      professionUz: {type: "string"},
      heroTitleUz: {type: "string"},
      heroSubtitleUz: {type: "string"},
      shortBioUz: {type: "textarea"},
      longBioUz: {type: "textarea"},
      siteTitleRu: {type: "string"},
      siteDescriptionRu: {type: "textarea"},
      professionRu: {type: "string"},
      heroTitleRu: {type: "string"},
      heroSubtitleRu: {type: "string"},
      shortBioRu: {type: "textarea"},
      longBioRu: {type: "textarea" },
      siteTitleEn: {type: "string"},
      siteDescriptionEn: {type: "textarea"},
      professionEn: {type: "string"},
      heroTitleEn: {type: "string"},
      heroSubtitleEn: { type: "string"},
      shortBioEn: {type: "textarea"},
      longBioEn: {type: "textarea"},
      ...properties

    }
  }
}


export default settingResource
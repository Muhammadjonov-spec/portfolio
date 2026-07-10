import mongoose from "mongoose";
import TranslationSchema from "./Translation.model.js";

const SettingTranslationSchema = new mongoose.Schema({
  settingId:{type:mongoose.Schema.Types.ObjectId, ref:"Setting", required:true},
  language: TranslationSchema.language,
  siteTitle:{type:String, required:true, trim:true},
  siteDescription:{type:String, default:null},
  profession:{type:String, default:null},
  heroTitle: {type: String, default: null},
  heroSubtitle: {type: String, default: null},
  shortBio: {type: String, default: null},
  longBio: {type: String, default: null}
})

SettingTranslationSchema.index({settingId:1, language:1}, {unique:true})

const SettingTranslation=mongoose.model("SettingTranslation", SettingTranslationSchema)

export default SettingTranslation
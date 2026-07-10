import mongoose from "mongoose";
import baseFields from "./base/baseFields.js";
import baseOptions from "./base/baseOptions.js";
const SettingSchema=new mongoose.Schema({
  avatar:{type:String, default:null},
  avatarPath:{type:String, default:null},
  avatarMime:{type:String, default:null},
  resume:{type:String, default:null},
  resumePath:{type:String, default:null},
  resumeMime:{type:String, default:null},
  heroImage:{type:String, default:null},
  heroImagePath:{type:String, default:null},
  heroImageMime:{type:String, default:null},
  phone:{type:String, default:null},
  email:{type:String, default:null},
  adress:{type:String, default:null},
  mapUrl:{type:String, default:null},
  defaultLanguage:{type:String, default:"uz"},
  maintenanceMode:{type:Boolean, default:false},
  ...baseFields
}, baseOptions)

const Setting=mongoose.model("Setting", SettingSchema)
export default Setting 
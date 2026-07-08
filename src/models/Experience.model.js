import mongoose from "mongoose";
import baseFields from "./base/baseFields.js";
import baseOptions from "./base/baseOptions.js";

const ExperienceSchema=new mongoose.Schema({
  company:{type:String, required:true, trim:true},
  slug:{type:String, required:true, unique:true, lowercase:true, trim:true},
  position:{type:String, required:true, trim:true},
  description:{type:String, required:true, trim:true},
  logo:{type:String, default:null},
  logoPath:{type:String, default:null},
  logoMime:{type:String, default:null},
  location:{type:String, default:null},
  startDate:{type:String, required:true},
  endDate:{type:String, default:null},
  current:{type:Boolean, default:false},
  technologies:[{type:String, trim:true}],
  published:{type:Boolean, default:true},
  sortOrder:{type:Number, default:0},
  ...baseFields
}, baseOptions)

ExperienceSchema.index({company:"text", position:"text"})
const Experience=mongoose.model("Experience", ExperienceSchema)

export default Experience
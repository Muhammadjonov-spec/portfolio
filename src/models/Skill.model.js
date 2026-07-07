import mongoose from "mongoose";
import baseFields from "./base/baseFields.js";
import baseOptions from "./base/baseOptions.js";

const SkillSchema=new mongoose.Schema({
  name:{type:String, required:true, trim:true},
  slug:{type:String, required:true, trim:true, unique:true, lowercase:true},
  icon:{type:String, default:null},
  iconPath:{type:String, default:null},
  iconMime:{type:String, default:null},
  category:{type:String, enum:["frontend", "backend", "database", "devops", "tools", "other"], 
    default:"other"},
  level:{type:Number, min:0, max:100, default:80},
  color: { type: String, default: "#000000" },
  sortOrder:{type:Number, default:0},
  published:{type:Boolean, default:true},
  ...baseFields
}, baseOptions)

const Skill=mongoose.model("Skill", SkillSchema)

export default Skill

import mongoose from "mongoose";
import baseFields from "./base/baseFields.js";
import baseOptions from "./base/baseOptions.js";
const ProjectSchema=new mongoose.Schema({
  title:{type:String, required:true, trim:true},
  slug:{type:String, required:true, unique:true, lowercase:true, trim:true},
  subtitle:{type:String, trim:true, default:null},
  description:{type:String, require:true, trim:true},
  image:{type:String, required:true},
  liveUrl:{type:String, default:null},
  githubUrl:{type:String, default:null},
  technologies:{type:String, trim:true},
  featured:{type:Boolean, default:false},
  published:{type:Boolean, default:false},
  projectDate:{type:Date, required:true},
  sortOrder:{type:Number, default:0},
  ...baseFields
}, baseOptions)

ProjectSchema.index({title:"text", description:"text"})

const Project=mongoose.model("Project", ProjectSchema)

export default Project
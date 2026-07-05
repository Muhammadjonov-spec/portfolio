import mongoose from "mongoose";
import baseFields from "./base/baseFields.js";
import baseOptions from "./base/baseOptions.js";
const ProjectSchema=new mongoose.Schema({
  title:{type:String, required:true, trim:true},
  slug:{type:String, required:true, unique:true, lowercase:true, trim:true},
  subtitle:{type:String, trim:true, default:null},
  description:{type:String, required:true, trim:true},
  image:{type:String, default:null},
  imagePath:{type:String, default:null},
  imageMime:{type:String, default:null},
  liveUrl:{type:String, default:null},
  githubUrl:{type:String, default:null},
  technologies:[String],
  featured:{type:Boolean, default:false},
  published:{type:Boolean, default:false},
  projectDate:{type:Date, required:true},
  sortOrder:{type:Number, default:0},
  ...baseFields
}, baseOptions)

ProjectSchema.index({title:"text", description:"text"})

const Project=mongoose.model("Project", ProjectSchema)

export default Project
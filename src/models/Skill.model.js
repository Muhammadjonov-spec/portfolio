import mongoose from "mongoose";
import baseFields from "./base/baseFields.js";
import baseOptions from "./base/baseOptions.js";

const SkillSchema=new mongoose.Schema({
  name:{type:String, required:true, trim:true},
  
})
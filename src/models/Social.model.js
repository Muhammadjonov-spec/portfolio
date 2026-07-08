import mongoose, { Schema } from "mongoose";
import baseFields from "./base/baseFields.js";
import baseOptions from "./base/baseOptions.js";

const SocialSchema=new mongoose.Schema({
  name: {
   type: String, required: true, unique: true, lowercase: true, trim: true,
   enum: [ "github", "linkedin", "telegram", "instagram", "facebook", "youtube",  "x", "leetcode", "codeforces",  "hackerrank",  "medium", "email", "website"]
        },
  url:{type:String, required:true, trim:true},
  username:{type:String, default:null, trim:true},
  published:{type:Boolean, default:true},
  sortOrder:{type:Number, default:null},
  ...baseFields
}, baseOptions)

const Social=mongoose.model("Social", SocialSchema)

export default Social
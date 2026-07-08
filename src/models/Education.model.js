import mongoose from "mongoose";
import baseFields from "./base/baseFields.js";
import baseOptions from "./base/baseOptions.js";
const EducationSchema=new mongoose.Schema({
  institution: { type: String, required: true, trim: true},
  slug: { type: String, required: true, unique: true, lowercase: true, trim: true},
  degree: { type: String, required: true, trim: true },
  field: {  type: String, default: null,  trim: true},
  description: {  type: String,  default: null,  trim: true},
  logo: {  type: String,  default: null},
  logoPath: {  type: String,  default: null},
  logoMime: { type: String, default: null },
  location: { type: String, default: null },
  startDate: { type: Date,  required: true},
  endDate: { type: Date, default: null },
  current: { type: Boolean, default: false},
  gpa: {type: String, default: null},
  published: {type: Boolean, default: true},
  sortOrder: {type: Number, default: 0},
  ...baseFields
}, baseOptions)

EducationSchema.index({institution:"text", degree:"text"})

const Education=mongoose.model("Education", EducationSchema)

export default Education
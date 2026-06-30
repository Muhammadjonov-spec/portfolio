import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt"

import baseFields from "./base/baseFields.js"
import baseOptions from "./base/baseOptions.js"
import ROLES from "../constants/roles.js"

const PortfolioUserSchema=new mongoose.Schema({
  firstName:{type:String, required:true, trim:true},
  lastName:{type:String, required:true, trim:true},
  userName:{type:String, required:true,  unique:true, trim:true, lowercase:true},
  email:{type:String, required:true, unique:true, lowercase:true, trim:true},
  password:{type:String, required:true, minlength:6, select:false},
  avatar:{type:String, default:null},
  role:{type:String, enum:Object.values(ROLES), default:ROLES.ADMIN},
  lastLogin:{type:Date, default:null},
  ...baseFields
}, baseOptions)

PortfolioUserSchema.pre("save", async function(){
   if(!this.isModified("password")) {
        
    }
     this.password = await bcrypt.hash(this.password, 12)

    
})

PortfolioUserSchema.methods.comparePassword=function(password){
  return bcrypt.compare(password, this.password)
}

const User=mongoose.model("PoUser", PortfolioUserSchema)

export default User
import mongoose from "mongoose";
import LANGUAGES from "../constants/languages.js";
const TranslationSchema={
  language:{type:String, enum:Object.values(LANGUAGES), required:true}
}

export default TranslationSchema
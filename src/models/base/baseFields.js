import mongoose from "mongoose";
const {ObjectId}=mongoose.Schema.Types

const baseFields={
  createdBy: {type: ObjectId, ref: "User", default: null},
  updatedBy: {type: ObjectId, ref: "User", default: null},
  isDeleted: { type: Boolean, default: false}
}

export default baseFields
import { updateRecord } from "adminjs"

const softDeleteAction={
  actionType: "record",
  icon: "Trash",
  guard:"Are you sure you want to delete this record?",
  handler:async(request, response, context)=>{
    const {record}=context
    await record.update({
      isDeleted:true, 
      updatedBy:context.currentAdmin._id
    })
    return {record:record.toJSON(context.currentAdmin)}
  }
}

export default softDeleteAction
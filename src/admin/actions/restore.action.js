import softDeleteAction from "./softDelete.action.js"

const restoreAction = {
  actionType:"record",
  icon:"Undo", 
  handler:async(request, response, context)=>{
    const {record}=context
    await record.update({isDeleted:false, updatedBy:context.currentAdmin._id})
    return{record:record.toJSON(context.currentAdmin)}
  }
}

export default restoreAction
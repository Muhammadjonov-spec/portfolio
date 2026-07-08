import Experience from "../../models/Experience.model.js";
import navigation from "../helpers/navigation.js";
import properties from "../helpers/commonProperties.js"
import createUploadFeature from "../features/upload/uploadOptions.js";
import experienceAfterHook from "../actions/experience.after.js";
import experienceBeforeHook from "../actions/experience.before.js";
import softDeleteAction from "../actions/softDelete.action.js";
import restoreAction from "../actions/restore.action.js";
import componentLoader from "../componentLoader.js";

const experienceResource={
  resource:Experience,
  features:[createUploadFeature( "uploads/experience", "logo", componentLoader)],
  options:{
    navigation:navigation.portfolio,
    sort:{sortBy:"sortOrder", direction:"asc"},
    listProperties:["company", "position", "current", "published", "sortOrder"],
    showProperties:["company", "position", "description", "logo", "location", "startDate", "endDate", "current", "technologies", "published", "sortOrder", "createdAt", "updatedAt"],
    editProperties:["company", "position", "description", "logo", "location", "startDate", "endDate", "current", "technologies", "published", "sortOrder"],
    filterProperties:["current", "published"],
    properties:{
      slug:{isVisible:false},
      logoPath:{isVisible:false}, 
      logoMime:{isVisible:false},
      ...properties
    },
    actions:{
      new:{
        before:experienceBeforeHook, 
        after:experienceAfterHook
      },
      edit:{
        before:experienceBeforeHook,
        after:experienceAfterHook
      },
      delete:softDeleteAction,
      restore:restoreAction
    }
  }
}

export default experienceResource
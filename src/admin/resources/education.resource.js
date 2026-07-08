import Education from "../../models/Education.model.js";
import educationAfterHook from "../actions/education.after.js";
import educationBeforeHook from "../actions/education.before.js";
import softDeleteAction from "../actions/softDelete.action.js";
import restoreAction from "../actions/restore.action.js";
import properties from "../helpers/commonProperties.js";
import navigation from "../helpers/navigation.js";
import createUploadFeature from "../features/upload/uploadOptions.js";
import componentLoader from "../componentLoader.js";

const educationResource={
  resource:Education,
  features:[createUploadFeature("uploads/education", "logo", componentLoader)],
  options:{
    navigation:navigation.portfolio,
    sort:{sortBy:"sortOrder", direction:"asc"},
    listProperties: [ "institution", "degree", "current", "published", "sortOrder" ],
    filterProperties: [ "current", "published"],
    editProperties: [ "institution", "degree", "field", "description", "logo", "location", "startDate", "endDate", "current", "gpa", "published", "sortOrder"],
    showProperties:["institution", "slug", "degree", "field", "description", "logo", "location", "startDate", "endDate", "current", "gpa", "published",
         "sortOrder",  "createdAt", "updatedAt"],
    properties:{
      slug:{isVisible:false},
      logoPath:{isVisible:false},
      logoMime:{isVisible:false},
      ...properties
    },
    actions:{
      new:{before:educationBeforeHook, after:educationAfterHook},
      edit:{before:educationBeforeHook, after:educationAfterHook},
      delete:softDeleteAction,
      restore:restoreAction
    }
  }
}

export default educationResource
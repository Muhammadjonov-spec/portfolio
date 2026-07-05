import Project from "../../models/Project.model.js"
import navigation from "../helpers/navigation.js"
import properties from "../helpers/commonProperties.js"
import createUploadFeature from "../features/upload/uploadOptions.js"
import projectBeforeHook from"../actions/project.before.js"
import projectAfterHook from "../actions/project.after.js"
import softDeleteAction from "../actions/softDelete.action.js"
import restoreAction from "../actions/restore.action.js"
import componentLoader from "../componentLoader.js"

const projectResource={
  resource:Project,
  features:[createUploadFeature("uploads/projects", "image", componentLoader)],
  options:{
    navigation:navigation.portfolio,
    listProperties:["title", "published", "featured", "projectDate", "sortOrder"],
    sort:{sortBy: "sortOrder", direction: "asc"},
    filterProperties:["featured", "projectDate", "published"],
    editProperties:["title", "subtitle", "description", "file", "liveUrl",  "githubUrl", "technologies", "featured", "published", "projectDate", "sortOrder"],
    showProperties: ["title", "slug", "subtitle", "description", "image",  "liveUrl", "githubUrl", "technologies", "featured", "published",  "projectDate", "sortOrder", "createdAt", "updatedAt"],
    properties:{
      imagePath:{isVisible:false},
      imageMime:{isVisible:false},
      slug:{isVisible:false}, 
      
      ...properties
    }, 
    actions:{
      new:{ before:projectBeforeHook, after:projectAfterHook},
      edit:{ before:projectBeforeHook, after:projectAfterHook},
      delete:softDeleteAction,
      restore:restoreAction
    },

  }
}

export default projectResource
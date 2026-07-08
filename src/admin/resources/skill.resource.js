import Skill from "../../models/Skill.model.js";
import navigation from "../helpers/navigation.js"
import properties from "../helpers/commonProperties.js"
import createUploadFeature from "../features/upload/uploadOptions.js"
import SkillBeforeHook from "../actions/skill.before.js";
import skillAfterHook from "../actions/skill.after.js";
import softDeleteAction from "../actions/softDelete.action.js"
import restoreAction from "../actions/restore.action.js"
import componentLoader from "../componentLoader.js";
const skillResource={
  resource:Skill,
  features:[createUploadFeature("uploads/skills", "icon", componentLoader)],

  options:{
    navigation:navigation.portfolio,
    sort:{sortBy:"sortOrder", direction:"asc"},
    listProperties:["name", "category", "level", "published", "sortOrder"],
    filterProperties:["category", "published"],
    editProperties:["name", "category", "level", "color", "file", "published", "sortOrder"],
    showProperties:["name", "category", "level", "color", "icon", "published", "sortOrder", "createdAt", "updatedAt"],
    properties:{
      slug:{isVisible:false},
      iconPath:{isVisible:false},
      iconMime:{isVisible:false},
      ...properties
  },
  actions:{
    new:{before:SkillBeforeHook, after:skillAfterHook},
    edit:{before:SkillBeforeHook, after:skillAfterHook},
    delete:softDeleteAction,
    restore:restoreAction
    }
  }
}

export default skillResource

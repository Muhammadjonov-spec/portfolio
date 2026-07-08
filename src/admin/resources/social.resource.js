import Social from "../../models/Social.model.js";
import navigation from "../helpers/navigation.js";
import properties from "../helpers/commonProperties.js"
import socialAfterHook from "../actions/social.after.js"
import skillBeforeHook from "../actions/skill.before.js"
import softDeleteAction from "../actions/softDelete.action.js"
import restoreAction from "../actions/restore.action.js"


const socialResource={
  resource:Social,
  options:{
    navigation:navigation.portfolio,
    sort:{sortBy:"sortOrder", direction:"asc"},
    listProperties:[ "name", "url", "username", "published", "sortOrder"],
    filterProperties:["name", "published"],
    editProperties:["name", "url", "username", "published", "sortOrder"],
    showProperties:["name", "url", "username", "published", "sortOrder", "createdAt", "updatedAt"],
    properties:{
      name:{availableValues: [
         { value: "github", label: "GitHub" },
         { value: "linkedin", label: "LinkedIn" },
         { value: "telegram", label: "Telegram" },
         { value: "instagram", label: "Instagram" },
         { value: "facebook", label: "Facebook" },
         { value: "youtube", label: "YouTube" },
         { value: "x", label: "X (Twitter)" },
         { value: "leetcode", label: "LeetCode" },
         { value: "codeforces", label: "Codeforces" },
         { value: "hackerrank", label: "HackerRank" },
         { value: "medium", label: "Medium" },
         { value: "email", label: "Email" },
         { value: "website", label: "Website" }
     ]},
     ...properties
    },
    actions:{
      new:{ before: skillBeforeHook, after:socialAfterHook},
      edit:{before:skillBeforeHook, after:socialAfterHook},
      delete:softDeleteAction,
      restore:restoreAction
    }
  }
}

export default socialResource
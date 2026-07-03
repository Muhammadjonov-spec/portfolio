import User from "../../models/User.model.js"
import navigation from "../helpers/navigation.js"
import commonActions from "../helpers/commonActions.js"
import commonProperties from "../helpers/commonProperties.js"
import { actions } from "adminjs"
const UserResource={
  resource:User,
  options:{
    navigation:navigation.administration,
    actions:commonActions,
    listProperties:[ "firstName",  "lastName", "email", "role",  "lastLogin"],
    filterProperties:["email", "role"],
    editProperties:[ "firstName",  "lastName", "email", "role",  "userName", "avatar"],
    showProperties:[ "_id", "firstName",  "lastName", "email", "role",  "userName", "avatar", "createdAt","updatedAt",  "lastLogin"],
    properties:{
      password:{isVisible:false},
      ...commonProperties
    }
  }
}

export default UserResource
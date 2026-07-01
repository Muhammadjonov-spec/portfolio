import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import * as AdminJSMongoose from "@adminjs/mongoose";

import branding from "./branding.js";
import dashboard from "./dashboard.js";
import authentication from "./authentication.js"
import resources from "./resources/index.js";

AdminJS.registerAdapter(AdminJSMongoose)

export const admin=new AdminJS({
  rootPath:"/admin", branding, dashboard, resources
})

export const adminRouter=AdminJSExpress.buildAuthenticatedRouter(admin, authentication, null)
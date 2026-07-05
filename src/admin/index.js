import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import * as AdminJSMongoose from "@adminjs/mongoose";

import branding from "./branding.js";
import dashboard from "./dashboard.js";
import authentication from "./authentication.js"
import resources from "./resources/index.js";
import componentLoader from "./componentLoader.js";
AdminJS.registerAdapter(AdminJSMongoose)

export const admin=new AdminJS({
  rootPath:"/admin", branding, dashboard, resources, componentLoader
})

export const adminRouter=AdminJSExpress.buildAuthenticatedRouter(admin, authentication, null, {secret:process.env.SESSION_SECRET, resave:false, saveUninitialized: false})
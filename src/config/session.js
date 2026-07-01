import dotenv from "dotenv";
dotenv.config()
import session from "express-session";
import MongoStore from "connect-mongo";

const sessionConfig =session({
  name: "portfolio.sid",
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 1000 * 60 * 60 * 24
    },
    store:MongoStore.create({mongoUrl:process.env.MONGO_URI})
})

export default sessionConfig
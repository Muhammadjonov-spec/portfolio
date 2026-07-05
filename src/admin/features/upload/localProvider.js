import fs from "fs"
import path from "path"
import {LocalProvider} from "@adminjs/upload"

const localProvider=(bucket)=>({
  bucket, 
  opts:{baseUrl:"/"}
})

export default localProvider
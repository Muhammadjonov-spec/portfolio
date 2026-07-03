import fs from "fs"
import path from "path"
import {LocalProvider} from "@adminjs/upload"

const localProvider=(bucket)=>{
  const resolvedBucket = path.isAbsolute(bucket)
    ? bucket
    : path.resolve(process.cwd(), bucket)
  fs.mkdirSync(resolvedBucket, { recursive: true })
  return new LocalProvider({bucket: resolvedBucket})
}

export default localProvider
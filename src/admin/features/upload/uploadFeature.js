import uploadFeature from "@adminjs/upload";
import componentLoader from "../../componentLoader.js";
import localProvider from "./localProvider.js";
const createUploadFeature = (bucket, property = "image") => {
  return uploadFeature({
    componentLoader,
    provider: {local:localProvider(bucket)},
    validation: {mimeTypes: ["image/png", "image/jpeg", "image/webp", "image/svg+xml"]},
    properties: {
      file: 'file',
      key: property,
      key: `${propertyName}Path`,     
      mimeType: `${propertyName}Mime`, 
      filePath: propertyName    
    }
  })
}

export default uploadFeature
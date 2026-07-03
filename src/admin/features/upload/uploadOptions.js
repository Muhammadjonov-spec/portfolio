import uploadFeature from "@adminjs/upload";
import localProvider from "./localProvider.js";
const uploadOptions = ({bucket, property = "image"}) => {
  return (admin) => uploadFeature({
    componentLoader: admin.componentLoader,
    provider: localProvider(bucket),
    validation: {mimeTypes: ["image/png", "image/jpeg", "image/webp", "image/svg+xml"]},
    properties: {
      key: property,
      file: "upploadFile",
      filePath: "filePath",
      filesToDelete: "filesToDelete"
    }
  })
}

export default uploadOptions
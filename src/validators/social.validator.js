import Joi from "joi";

export const createSocialSchema=Joi.object({
  name:Joi.string().valid("github",  "linkedin",  "telegram", "instagram", "facebook", "youtube", "x", "leetcode", "codeforces", "hackerrank", "medium", "email", "website").required(),
  url:Joi.string().uri().required(),
  username:Joi.string().allow("", null),
  published:Joi.boolean(),
  sortOrder:Joi.number()

})

export const updateSocialSchema=createSocialSchema.fork(
  ["name", "url"],
  (field)=>field.optional()
)
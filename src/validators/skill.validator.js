import Joi from "joi";

export const createSkillSchema = Joi.object({
  name:Joi.string().trim().min(2).max(100).required(),
  category:Joi.string().valid("frontend", "backend", "database", "devops", "tools", "other").required(),
  level:Joi.number().min(0).max(100).required(),
  color:Joi.string().trim(),
  published: Joi.boolean(),
  sortOrder: Joi.number()
})

export const updateSkillSchema=createSkillSchema.fork(["name", "category", "level"],
  (field)=>{field.optional()}
)
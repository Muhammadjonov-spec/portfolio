import Joi from "joi"
 export const createProjectSchema = Joi.object({
    title: Joi.string().required(),
    subtitle: Joi.string().allow("", null),
    description: Joi.string().required(),
    liveUrl: Joi.string().allow("", null),
    githubUrl: Joi.string().allow("", null),
    technologies: Joi.array().items(Joi.string(Joi.string().trim())).default([]),
    featured: Joi.boolean().default(false),
    published: Joi.boolean().default(false),
    projectDate: Joi.date().required(),
    sortOrder: Joi.number()
})

export const updateProjectSchema=createProjectSchema.fork(
    ["title", "description", "projectDate"],
    (schema)=>schema.optional()
)
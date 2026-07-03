import Joi from "joi"
 export const createProjectSchema = Joi.object({
    title: Joi.string().required(),
    slug: Joi.string().required(),
    subtitle: Joi.string().allow("", null),
    description: Joi.string().required(),
    image: Joi.string().required(),
    liveUrl: Joi.string().allow("", null),
    githubUrl: Joi.string().allow("", null),
    technologies: Joi.array().items(Joi.string()),
    featured: Joi.boolean(),
    published: Joi.boolean(),
    projectDate: Joi.date().required(),
    sortOrder: Joi.number()
})
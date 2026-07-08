import Joi from "joi"
export const createEducationSchema = Joi.object({
    institution: Joi.string().trim().required(),
    degree: Joi.string().trim().required(),
    field: Joi.string().allow("", null),
    description: Joi.string().allow("", null),
    location: Joi.string().allow("", null),
    startDate: Joi.date().required(),
    endDate: Joi.date().allow(null),
    current: Joi.boolean(),
    gpa: Joi.string().allow("", null),
    published: Joi.boolean(),
    sortOrder: Joi.number()
})
export const updateEducationSchema =createEducationSchema.fork(
  ["institution", "degree", "startDate"],
  (field) => field.optional())
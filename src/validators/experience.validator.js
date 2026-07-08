import { defaultLocale } from "adminjs";
import Joi from "joi";

export const createExperienceSchema = Joi.object({
  company:Joi.string().trim().required(),
  position:Joi.string().trim().required(),
  description:Joi.string().required(),
  location: Joi.string().allow("", null),
  startDate: Joi.date().required(),
  endDate:Joi.date().allow(null),
  current:Joi.boolean(),
  technologies:Joi.array().items(Joi.string().trim()).default([]),
  published:Joi.boolean(),
  sortOrder:Joi.number()
})

export const updateExperienceSchema=createExperienceSchema.fork([
  "company", "position", "description", "startDate"
], (field)=>field.optional)
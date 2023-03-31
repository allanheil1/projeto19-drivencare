import joi from 'joi';

export const patientSchema = joi.object({
    name: joi.string().min(2).required(),
    email: joi.string().required(),
    password: joi.string().required(),
})
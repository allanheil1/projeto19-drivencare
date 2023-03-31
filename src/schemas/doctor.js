import joi from 'joi';

export const doctorSchema = joi.object({
    name: joi.string().min(2).required(),
    email: joi.string().required(),
    password: joi.string().required(),
    specialty: joi.string().required(),
    lcoation: joi.string().required()
})
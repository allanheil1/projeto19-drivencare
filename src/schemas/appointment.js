import joi from 'joi';

export const appointmentSchema = joi.object({
    doctorId: joi.number().required(),
    date: joi.date().required(),
    hour: joi.number().min(8).max(17).required(),
    status: joi.string().required(),
});
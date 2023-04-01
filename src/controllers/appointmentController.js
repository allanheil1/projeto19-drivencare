import appointmentServices from '../services/appointmentServices.js';

async function create(req, res, next){

    const { doctorId, date, hour, status } = req.body;

    const patientId = res.locals.patientId;

    try{

        await appointmentServices.create({ patientId, doctorId, date, hour, status });

        return res.sendStatus(201);

    } catch (err) {

        next(err);

    }

}

export default {
    create,
}
import appointmentServices from '../services/appointmentServices.js';

async function create(req, res, next) {

    const { doctorId, date, hour, status } = req.body;

    const patientId = res.locals.patientId;

    try {

        await appointmentServices.create({ patientId, doctorId, date, hour, status });

        return res.sendStatus(201);

    } catch (err) {

        next(err);

    }

}

async function searchByPatient(req, res, next) {

    const patientId = res.locals.patientId;

    try {

        const appointments = await appointmentServices.searchByPatient(patientId);

        return res.send(appointments);

    } catch (err) {

        next(err);

    }

}

async function searchByDoctor(req, res, next) {

    const doctorId = res.locals.doctorId;

    try {

        const appointments = await appointmentServices.searchByDoctor(doctorId);

        return res.send(appointments);

    } catch (err) {

        next(err);

    }

}

export default {
    create,
    searchByPatient,
    searchByDoctor
}
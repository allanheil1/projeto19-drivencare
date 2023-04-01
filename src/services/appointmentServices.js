import appointmentRepositories from '../repositories/appointmentRepositories.js';
import errors from '../errors/index.js';

async function create({ patientId, doctorId, date, hour, status }) {

    console.log(date, hour, doctorId)
    console.log('antes')
    const doctorAppointments = await appointmentRepositories.verifyDateDoctor({ date, hour, doctorId });
    console.log('depois')

    if (doctorAppointments.rowCount) {
        throw errors.conflictError('Doctor date is unavailable');
    }

    const patientAppointments = await appointmentRepositories.verifyDatePatient({ date, hour, patientId });

    if (patientAppointments.rowCount) {
        throw errors.conflictError('You already have an appointment for that date');
    }

    await appointmentRepositories.create({ patientId, doctorId, date, hour, status });

}

async function searchByPatient(patientId) {

    const { rowCount, rows: appointments } = await appointmentRepositories.searchByPatient(patientId);

    if (!rowCount) throw errors.notFoundError();

    return appointments;

}

async function searchByDoctor(doctorId) {

    const { rowCount, rows: appointments } = await appointmentRepositories.searchByDoctor(doctorId);

    if (!rowCount) throw errors.notFoundError();

    return appointments;

}


export default {
    create,
    searchByPatient,
    searchByDoctor,
}
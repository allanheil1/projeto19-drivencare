import appointmentRepositories from '../repositories/appointmentRepositories.js';
import errors from '../errors/index.js';

async function create({ patientId, doctorId, date, hour, status }) {

    const doctorAppointments = await appointmentRepositories.verifyDateDoctor({ date, hour, doctorId });

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

async function confirm({doctorId, appointmentId}) {

    const { rowCount, rows: [appointment] } = await appointmentRepositories.findById(appointmentId);

    if (!rowCount) throw errors.notFoundError();

    if(doctorId !== appointment.doctor_id) throw errors.appointmentUnauthorized();

    if(appointment.status === 'canceled') throw errors.appointmentIsCanceled();

    await appointmentRepositories.confirm(appointmentId);

}

async function cancel({doctorId, appointmentId}) {

    const { rowCount, rows: [appointment] } = await appointmentRepositories.findById(appointmentId);

    if (!rowCount) throw errors.notFoundError();

    if(doctorId !== appointment.doctor_id) throw errors.appointmentUnauthorized();

    await appointmentRepositories.cancel(appointmentId);

}

async function done({doctorId, appointmentId}) {

    const { rowCount, rows: [appointment] } = await appointmentRepositories.findById(appointmentId);

    if (!rowCount) throw errors.notFoundError();

    if(doctorId !== appointment.doctor_id) throw errors.appointmentUnauthorized();

    if(appointment.status === 'done') throw errors.appointmentIsDone();

    await appointmentRepositories.done(appointmentId);

}

export default {
    create,
    searchByPatient,
    searchByDoctor,
    confirm,
    cancel,
    done,
}
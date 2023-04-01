import appointmentRepositories from '../repositories/appointmentRepositories.js';
import errors from '../errors/index.js';

async function create ({ patientId, doctorId, date, hour, status }){

    const doctorAppointments = await appointmentRepositories.verifyDateDoctor({ date, hour, doctorId });

    if(doctorAppointments.rowCount){
        throw errors.conflictError('Doctor date is unavailable');
    }

    const patientAppointments = await appointmentRepositories.verifyDatePatient({ date, hour, patientId });

    if(patientAppointments.rowCount){
        throw errors.conflictError('You already have an appointment for that date');
    }

    await appointmentRepositories.create({ patientId, doctorId, date, hour, status });

}


export default {
    create, 
}
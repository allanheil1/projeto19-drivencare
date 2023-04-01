import connectionDb from '../config/database.js';

async function create({ patientId, doctorId, date, hour, status }){
    return await connectionDb.query(
        `
        INSERT  INTO appointments 
                    (doctor_id, patient_id, appoint_date, appoint_hour, status)
                VALUES ($1, $2, $3, $4, $5)
        `,
        [doctorId, patientId, date, hour, status]
    );
}

async function verifyDateDoctor({ date, hour, doctorId }){
    return await connectionDb.query(
        `
        SELECT * FROM appointments WHERE appoint_date=$1 AND appoint_hour=$2 AND doctor_id=$3
        `,
        [date, hour, doctorId]
    );
}

async function verifyDatePatient({ date, hour, patientId }){
    return await connectionDb.query(
        `
        SELECT * FROM appointments WHERE appoint_date=$1 AND appoint_hour=$2 AND patient_id=$3
        `,
        [date, hour, patientId]
    );
}

export default {
    create,
    verifyDateDoctor,
    verifyDatePatient,
}
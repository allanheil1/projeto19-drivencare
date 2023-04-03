import connectionDb from '../config/database.js';

async function create({ patientId, doctorId, date, hour, status }) {
    return await connectionDb.query(
        `
        INSERT INTO appointments
        (doctor_id,
         patient_id,
         appoint_date,
         appoint_hour,
         status)
        VALUES      ($1,
         $2,
         $3,
         $4,
         $5) 
        `,
        [doctorId, patientId, date, hour, status]
    );
}

async function verifyDateDoctor({ date, hour, doctorId }) {
    return await connectionDb.query(
        `
        SELECT *
        FROM   appointments
        WHERE  appoint_date = $1
               AND appoint_hour = $2
               AND doctor_id = $3 
        `,
        [date, hour, doctorId]
    );
}

async function verifyDatePatient({ date, hour, patientId }) {
    return await connectionDb.query(
        `
        SELECT *
        FROM   appointments
        WHERE  appoint_date = $1
               AND appoint_hour = $2
               AND patient_id = $3 
        `,
        [date, hour, patientId]
    );
}

async function searchByPatient(patientId) {
    return await connectionDb.query(
        `
        SELECT 
            d.name AS doctor_name, 
            d.specialty AS doctor_specialty, 
            a.appoint_date AS appointment_date, 
            a.appoint_hour AS appointment_hour
        FROM appointments a
        JOIN doctors d 
            ON a.doctor_id = d.id
        WHERE a.patient_id=$1
        `,
        [patientId]
    );
}

async function searchByPatientDone(patientId) {
    return await connectionDb.query(
        `
        SELECT 
            d.name AS doctor_name, 
            d.specialty AS doctor_specialty, 
            a.appoint_date AS appointment_date, 
            a.appoint_hour AS appointment_hour,
            a.status AS status
        FROM appointments a
        JOIN doctors d 
            ON a.doctor_id = d.id
        WHERE a.patient_id=$1 AND a.status='done'
        `,
        [patientId]
    );
}

async function searchByDoctor(doctorId) {
    return await connectionDb.query(
        `
        SELECT 
            a.id AS appointment_id,
            p.name AS patient_name, 
            d.specialty AS doctor_specialty, 
            a.appoint_date AS date, 
            a.appoint_hour AS hour
        FROM appointments a
        JOIN patients p
            ON a.patient_id = p.id
        JOIN doctors d
            ON a.doctor_id = d.id
        WHERE a.doctor_id=$1
        `,
        [doctorId]
    );
}

async function searchByDoctorDone(doctorId) {
    return await connectionDb.query(
        `
        SELECT 
            a.id AS appointment_id,
            p.name AS patient_name, 
            d.specialty AS doctor_specialty, 
            a.appoint_date AS date, 
            a.appoint_hour AS hour,
            a.status AS stauts
        FROM appointments a
        JOIN patients p
            ON a.patient_id = p.id
        JOIN doctors d
            ON a.doctor_id = d.id
        WHERE a.doctor_id=$1 AND a.status='done'
        `,
        [doctorId]
    );
}

async function findById(appointmentId){
    return await connectionDb.query(
        `
        SELECT * FROM appointments
        WHERE id=$1
        `,
        [appointmentId]
    );
}

async function confirm(appointmentId){
    return await connectionDb.query(
        `
        UPDATE appointments
        SET status=$1
        WHERE id=$2
        `,
        ['confirmed', appointmentId]
    );
}

async function cancel(appointmentId){
    return await connectionDb.query(
        `
        UPDATE appointments
        SET status=$1
        WHERE id=$2
        `,
        ['canceled', appointmentId]
    );
}

async function done(appointmentId){
    return await connectionDb.query(
        `
        UPDATE appointments
        SET status=$1
        WHERE id=$2
        `,
        ['done', appointmentId]
    );
}

export default {
    create,
    verifyDateDoctor,
    verifyDatePatient,
    searchByPatient,
    searchByDoctor,
    searchByPatientDone,
    searchByDoctorDone,
    findById,
    confirm,
    cancel,
    done,
}
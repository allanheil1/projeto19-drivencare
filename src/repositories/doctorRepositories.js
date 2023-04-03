import connectionDb from '../config/database.js';

async function findByEmail(email){
    return await connectionDb.query(
        `
        SELECT *
        FROM   doctors
        WHERE  email = $1 
        `,
        [email]
    );
}

async function create({ name, email, password, specialty, location }){
    return await connectionDb.query(
        `
        INSERT INTO doctors
        (NAME,
         email,
         password,
         specialty,
         location)
        VALUES      ($1,
         $2,
         $3,
         $4,
         $5) 
        `,
        [name, email, password, specialty, location]
    );
}

async function findById(id){
    return await connectionDb.query(
        `
        SELECT *
        FROM   doctors
        WHERE  id = $1
        `,
        [id]
    );
}

async function search({ name, specialty, location }){
    return await connectionDb.query(
        `
        SELECT *
        FROM   doctors
        WHERE  NAME = $1
                OR specialty = $2
                OR location = $3 
        `,
        [name, specialty, location]
    );
}

export default {
    findByEmail,
    create,
    findById,
    search
}
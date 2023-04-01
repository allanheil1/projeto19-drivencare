import connectionDb from '../config/database.js';

async function findByEmail(email){
    return await connectionDb.query(
        `
        `,
    []);
}

async function create(){
    return await connectionDb.query(
        `
        `,
    []);
}

async function findById(){
    return await connectionDb.query(
        `
        `,
    []);
}

export default {
    findByEmail,
    create,
    findById
}
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import doctorRepositories from '../repositories/doctorRepositories.js';
import errors from '../errors/index.js';

async function create ({name, email, password, specialty, location}){

    const { rowCount } = await doctorRepositories.findByEmail(email);

    if(rowCount){
        throw errors.duplicatedEmailError(email);
    }

    const hashPassword = await bcrypt.hash(password, 10);

    await doctorRepositories.create({name, email, password: hashPassword, specialty, location});

}

async function signIn({ email, password }){

    const { rowCount, rows: [doctor]} = await doctorRepositories.findByEmail(email);

    if(!rowCount) throw errors.invalidCredentialsError();

    const validPassword = bcrypt.compare(password, doctor.password);

    if(!validPassword) throw errors.invalidCredentialsError();

    const token = jwt.sign({doctorId: doctor.id}, process.env.SECRET_KEY);

    return token;

}

async function search({ name, specialty, location }){

    const {rowCount, rows: doctors} = await doctorRepositories.search({ name, specialty, location });

    if(!rowCount) throw errors.notFoundError();

    return doctors;
}

export default {
    create, 
    signIn,
    search
}
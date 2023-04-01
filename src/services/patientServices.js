import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import patientRepositories from '../repositories/patientRepositories.js';
import errors from '../errors/index.js';

async function create ({ name, email, password }){

    const { rowCount } = await patientRepositories.findByEmail(email);

    if(rowCount){
        throw errors.duplicatedEmailError(email);
    }

    const hashPassword = await bcrypt.hash(password, 10);

    await patientRepositories.create({name, email, password: hashPassword});

}

async function signIn({ email, password }){

    const { rowCount, rows: [patient]} = await patientRepositories.findByEmail(email);

    if(!rowCount) throw errors.invalidCredentialsError();

    const validPassword = bcrypt.compare(password, patient.password);

    if(!validPassword) throw errors.invalidCredentialsError();

    const token = jwt.sign({patientId: patient.id}, process.env.SECRET_KEY);

    return token;

}

export default {
    create, 
    signIn
};
import doctorServices from "../services/doctorServices.js";

async function create(req, res, next){
    
    const { name, email, password, specialty, location } = req.body;

    try{

        await doctorServices.create({ name, email, password, specialty, location })

        return res.sendStatus(201);

    } catch (err) {

        next(err);

    }

}

async function signIn(req, res, next){
    const { email, password } = req.body;

    try{

        const token = await doctorServices.signIn({email, password})

        return res.send(token);

    } catch (err) {

        next(err);

    }
}

async function search(req, res, next){

    const { name, specialty, location } = req.body;

    try{
        
        const doctors = await doctorServices.search({ name, specialty, location });

        return res.send(doctors)

    } catch (err) {

        next(err);

    }

}

export default {
    create, 
    signIn, 
    search
};
import jwt from 'jsonwebtoken';

export const tokenValidatePatient = async (req, res, next) => {

  const { authorization } = req.headers;

  const token = authorization?.split(' ')[1]?.trim();

  if (!token) return res.status(401).send('Faça login para continuar');

  try {

    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    const patientId = decodedToken.patientId;
    res.locals.patientId = patientId;
    next();

  } catch (error) {

    return res.status(401).send('Faça login para continuar');

  }

};


export const tokenValidateDoctor = async (req, res, next) => {

  const { authorization } = req.headers;

  const token = authorization?.split(' ')[1]?.trim();

  if (!token) return res.status(401).send('Faça login para continuar');

  try {

    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    const doctorId = decodedToken.doctorId;
    res.locals.doctorId = doctorId;
    next();

  } catch (error) {

    return res.status(401).send('Faça login para continuar');

  }
  
};

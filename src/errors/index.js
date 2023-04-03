function conflictError(message) {
    return {
      name: "ConflictError",
      message,
    };
  }
  
  function duplicatedEmailError(email) {
    return {
      name: "DuplicatedEmailError",
      message: "There is already an user with given email",
      email,
    };
  }
  
  function unauthorizedError() {
    return {
      name: "UnauthorizedError",
      message: "You must be signed in to continue",
    };
  }

  function appointmentUnauthorized(){
    return {
      name: "UnauthorizedAction",
      message: "This appointment belongs to another doctor"
    }
  }

  function appointmentIsCanceled(){
    return {
      name: "InvalidAppointmentConfirm",
      message: "This appointment has already been canceled and can't be confirmed"
    }
  }

  function appointmentIsDone(){
    return {
      name: "InvalidAppointmentDone",
      message: "This appointment has already been marked as done"
    }
  }
  
  function notFoundError() {
    return {
      name: "NotFoundError",
      message: "No result for this search!",
    };
  }
  
  function invalidCredentialsError() {
    return {
      name: "InvalidCredentialsError",
      message: "Email or password are incorrect",
    };
  }
  
  export default {
    conflictError,
    duplicatedEmailError,
    unauthorizedError,
    notFoundError,
    invalidCredentialsError,
    appointmentUnauthorized,
    appointmentIsCanceled,
    appointmentIsDone
  };
  
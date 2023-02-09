const emailValidation = (email) => {
const regexValidation = /\S+@\S+\.\S+/;
return regexValidation.test(email);
};

module.exports = emailValidation;
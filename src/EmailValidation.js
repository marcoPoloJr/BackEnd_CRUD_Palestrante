const emailValidation = (email) => {
const regexValidation = /\S+@\S+\.\S+/;
console.log(`É email válido? Resposta: ${regexValidation.test(email)}`);
return regexValidation.test(email);
};

module.exports = emailValidation;
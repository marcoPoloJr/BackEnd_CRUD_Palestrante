const dateValidation = (date) => {
    const regexValidation = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
    return regexValidation.test(date);
    };
    
    module.exports = dateValidation;
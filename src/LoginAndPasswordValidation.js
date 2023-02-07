const emailValidation = require('./EmailValidation');

const isValidEmail = (req, res, next) => {
    const { email } = req.body;
    if (!email || email.length <= 0) {
        return res.status(400).json({ message: 'O campo "email" é obrigatório' });
    }
    if (!emailValidation(email)) {
        return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
    }
    next();
    };

const isValidPassword = (req, res, next) => {
    const { password } = req.body;

    if (!password || password.length <= 0) {
        return res.status(400).json({ message: 'O campo "password" é obrigatório' });
    }
    if (password.length <= 5) {
        return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
    }
    next();
};

    module.exports = {
        isValidEmail,
        isValidPassword,
    };
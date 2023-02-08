const dateValidation = require('./DateValidation');

const isValidTolken = (req, res, next) => {
    const { authorization } = req.headers;
if (!authorization) return res.status(401).json({ message: 'Token não encontrado' });
if (authorization.length !== 16 || typeof authorization !== 'string') {
    return res.status(401).json({ message: 'Token inválido' });    
}
next();
};

const isValidName = (req, res, next) => {
    const { name } = req.body;
if (!name) return res.status(400).json({ message: 'O campo "name" é obrigatório' }); 
if (name.length < 3) { 
    return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
}
next();
};

const isValidAge = (req, res, next) => {
    const { age } = req.body;
if (!age) return res.status(400).json({ message: 'O campo "age" é obrigatório' }); 
if (typeof age !== 'number') {
    return res.status(400).json({ message: 'O campo "age" deve ser do tipo "number"' });
}
if (!Number.isInteger(age)) {
    return res.status(400).json({ message: 'O campo "age" deve ser um "number" do tipo inteiro' });
}
if (age < 18) {
    return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
}
    next();
};

const isValidTalk = (req, res, next) => {
const { talk } = req.body;

if (!talk) return res.status(400).json({ message: 'O campo "talk" é obrigatório' });
next();
};

const isValidwatchedAt = (req, res, next) => {
    const { talk } = req.body;
    const { watchedAt } = talk;
    
if (!watchedAt) return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
if (dateValidation(watchedAt) === false) {
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
}    
    next();
    };

const isValidRate = (req, res, next) => {
    const { talk } = req.body;
    const { rate } = talk;
    if (rate === undefined || rate === '') {
        return res.status(400).json({ message: 'O campo "rate" é obrigatório' });
    }
    next();
};

const isValidNamberRate = (req, res, next) => {
    const { talk } = req.body;
    const { rate } = talk;
if (rate < 1 || rate > 5 || !Number.isInteger(rate)) {
 return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
}    
    next();
};

module.exports = {
    isValidTolken,
    isValidName,
    isValidAge,
    isValidTalk,
    isValidwatchedAt,
    isValidRate,
    isValidNamberRate,    
};
const express = require('express');

const router = express.Router();
const talkers = require('./Talkers');
const { isValidTolken, isValidName, isValidAge, 
    isValidTalk, isValidwatchedAt, isValidRate,
    isValidNamberRate } = require('./NewTalkerValidations');

router.get('/', async (_req, res) => {
    try {
        const content = await talkers.allTalkers();
        if (content.length <= 0) return res.status(200).json([]);
            return res.status(200).json(content);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const talkerResult = await talkers.getId(id);
        if (!talkerResult) {
 return res.status(404)
        .json({ message: 'Pessoa palestrante não encontrada' }); 
}
        return res.status(200).json(talkerResult);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

router.post('/', isValidTolken, isValidName, isValidAge, isValidTalk, isValidwatchedAt, 
isValidRate, isValidNamberRate, async (req, res) => {
    const { name, age, talk } = req.body;
    const { watchedAt, rate } = talk;
try {
    const data = await talkers.allTalkers();
    const newTalker = {
        id: data.length + 1,
        name,
        age,
        talk: {
            watchedAt, rate,
        },
    };
data.push(newTalker);
await talkers.writeTalker(data);
return res.status(201).json(newTalker);
} catch (error) {
    return res.status(500).json({ message: error.message });
}
});

router.put('/:id', isValidTolken, isValidName, isValidAge, isValidTalk, isValidwatchedAt, 
isValidRate, isValidNamberRate, async (req, res) => {
    try {
        const { id } = req.params;
        const data = await talkers.readTalker();
        const index = data.findIndex((i) => i.id === Number(id));
        if (!index) return res.status(404).json({ message: 'Não encontrado' });
        const results = await talkers.edit(index, req.body);
        console.log(results);
        return res.status(200).json(results);
    } catch (error) {
        return res.status(500).json({ message: await talkers.readTalker() });
    }
});
module.exports = router;
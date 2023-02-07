const express = require('express');

const router = express.Router();
const talkers = require('./Talkers');

router.get('/', async (_req, res) => {
    try {
        const content = await talkers.allTalkers();
        if (content.length <= 0) return res.status(200).json([]);
            return res.status(200).json(content);
    } catch (error) {
        return res.status(500).json(error.message);
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
        return res.status(500).json(error.message);
    }
});
module.exports = router;
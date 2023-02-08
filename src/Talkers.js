const fs = require('fs/promises');
const { join } = require('path');

const readTalker = async () => {
    try {
        const contentTalker = await fs.readFile(join(__dirname, './talker.json'), 'utf-8');
        return JSON.parse(contentTalker);
    } catch (error) {
        return null;
    }
};
const allTalkers = async () => {
    const file = await readTalker();
    return file;
};

const getId = async (id) => {
    const file = await readTalker();

    const talkerResult = file.find((talker) => talker.id === Number(id));
    return talkerResult;
};

const writeTalker = async (talker) => {
    try {
        const path = join(__dirname, './talker.json');
        await fs.writeFile(path, JSON.stringify(talker));
    } catch (error) {
        console.error('Erro ao salvar o arquivo', error.message);
    return null;
    }
};

module.exports = {
    readTalker,
    allTalkers,
    getId,
    writeTalker,
};

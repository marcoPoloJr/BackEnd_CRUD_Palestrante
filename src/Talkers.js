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
module.exports = {
    allTalkers,
};

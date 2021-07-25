const util = require('util');
const sleep = util.promisify( setTimeout );
//util.promisify()
// Funciones que simulan tareas asincronas
async function taskOne() {
    await sleep(4000);
    return 'one value';
}

async function taskTwo() {
    await sleep(2000);
    return 'two value';
}

module.exports = {
    taskOne,
    taskTwo
}
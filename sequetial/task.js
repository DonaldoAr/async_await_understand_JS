const util = require('util');
const sleep = util.promisify( setTimeout );
//util.promisify()
// Funciones que simulan tareas asincronas
async function taskOne() {
    try{
        throw new Error('Some Problem');
        await sleep(4000);
        return 'one value';
    }catch(e){
        console.log(e);
    }
    
}

async function taskTwo() {
    try{
        await sleep(2000);
        return 'two value';
    }catch(e){
        console.log(e);
    }
    
}

module.exports = {
    taskOne,
    taskTwo
}
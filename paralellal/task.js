const util = require('util');
const sleep = util.promisify( setTimeout );
//util.promisify()
// Funciones que simulan tareas asincronas
async function taskOne1() {
    try{
        await sleep(4000);
        return 'one value';
    }catch(e){
        console.log(e);
    }
    
}

async function taskTwo1() {
    try{
        await sleep(2000);
        return 'two value';
    }catch(e){
        console.log(e);
    }
    
}

module.exports = {
    taskOne1,
    taskTwo1
}
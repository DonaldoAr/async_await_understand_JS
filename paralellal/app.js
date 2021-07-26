const { taskOne1, taskTwo1 } = require("./task");

console.clear();
async function main() {
    try{
        console.time('Measuring time');
        const results = await Promise.all([taskOne1(), taskTwo1()]); // For executting a code paralellal
        console.timeEnd('Measuring time');
        console.log(`TaskOne: ${results[0]}`)
        console.log(`TaskTwo: ${results[1]}`)    
    }catch(e){
        console.log(e);
    }
}

main();



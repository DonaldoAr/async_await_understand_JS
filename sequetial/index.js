const { taskOne, taskTwo } = require("./task");

console.clear();
async function main() {
    console.time('Measuring time');
    const a = await taskOne();
    const b = await taskTwo();
    console.timeEnd('Measuring time');

    console.log(`TaskOne: ${a}`)
    console.log(`TaskTwo: ${b}`)    
}
main();



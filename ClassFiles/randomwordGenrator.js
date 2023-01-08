const fs = require('fs');
const fileLocation='./random1000words.txt'
let file = fs.readFileSync(fileLocation) // reads the file  as a buffer
file = file.toString() // makes the buffer into a readable string
file = file.split('\n') // makes all the items in the lists

const getRandomWords=(num)=>{
    let result=[];
    while(num--){
        const idx= Math.floor(Math.random() * file.length)
        res.push(file[idx]);
    }
    return result;
}

module.exports=getRandomWords;
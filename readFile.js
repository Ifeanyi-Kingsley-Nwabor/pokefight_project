const fs = require ('fs')
const data = require('./file.json');

const readFile = ()=> {
    fs.readFile('file.json', 'utf8', (err, data) => {
        if(err) {
            console.log(err)
        } else {
            const parsedData = JSON.parse(data)
            res.send(parsedData);
        }
    })
}
module.exports = readFile;
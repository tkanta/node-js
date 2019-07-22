
const fs = require('fs')


const jsonStr = fs.readFileSync('1-json.json').toString();

const data = JSON.parse(jsonStr);

data.name = "Tarini"
data.age = 38

fs.writeFileSync('1-json.json', JSON.stringify(data))


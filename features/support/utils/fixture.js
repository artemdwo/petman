const path = require('path')
const fs = require('fs')

function get(name){
  const bodyPath = path.resolve(__dirname, '../fixtures/' + name + '.json')
  
  return JSON.parse(fs.readFileSync(bodyPath))
}

module.exports = {
  get
}

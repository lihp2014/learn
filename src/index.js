import { promisify } from 'util'
import { resolve as r } from 'path'
import { readFile, writeFileSync as wfs } from 'fs'
// import * as qs from 'querystring'

// promisify(readFile)(r(__dirname, '../package.json'))
//   .then(data => {
//     data = JSON.parse(data)
//     console.log(data.name)
//     wfs(r(__dirname, './name.txt'), String(data.name), 'utf-8')
//   })

import { name, getName } from './ex'

console.log(name)
console.log(getName())

// const readAsync = util.promisify(fs.readFile)
async function init() {
  let data = await promisify(readFile)(r(__dirname, '../package.json'))

  data = JSON.parse(data)
  console.log(data.name)
}
init()
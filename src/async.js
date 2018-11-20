const fs = require('fs')

// 第一阶段
// function readFile (cb) {
//   fs.readFile('./package.json', (err, data) => {
//     if (err) return cb(err)
//     cb && cb(null, data)
//   })
// }

// readFile((err, data) => {
//   if (!err) {
//     data = JSON.parse(data)
//     console.log(data.name)
//   }
// })

// 第二阶段 Promise
// function readFileAsync (path) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(path, (err, data) => {
//       if (err) reject(err)
//       else resolve(data)
//     })
//   })
// }

// readFileAsync('./package.json')
//   .then(data => {
//     data = JSON.parse(data)
//     console.log(data.name)
//   })
//   .catch(err => {
//     console.log(err)
//   })


// 第三阶段   co + generator + yield 
// const co = require('co')
const util = require('util')

// co(function *() {
//   let data = yield util.promisify(fs.readFile)('./package.json')

//   data = JSON.parse(data)
//   console.log(data.name)
// })

// 第四阶段 async统一世界
const readAsync = util.promisify(fs.readFile)
async function init() {
  let data = await readAsync('./package.json')

  data = JSON.parse(data)
  console.log(data.name)
}
init()
'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(makeIterator);

// function makeIterator (arr) {
//   let nextIndex = 0;

//   // 返回一个迭代器对象
//   return {
//     next: () => {
//       // next() 方法返回的结果对象
//       if (nextIndex < arr.length) {
//         return { value: arr[nextIndex++], done: false }
//       } else {
//         return { done: true }
//       }
//     }
//   }
// }

// const it = makeIterator(['吃饭', '睡觉', '打豆豆'])

// console.log('首先', it.next().value)
// console.log('其次', it.next().value)
// console.log('然后', it.next().value)
// console.log('最后', it.next().done)
// console.log('最后', it.next().value)

// 生成器函数
function makeIterator(arr) {
  var i;
  return _regenerator2.default.wrap(function makeIterator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          i = 0;

        case 1:
          if (!(i < arr.length)) {
            _context.next = 7;
            break;
          }

          _context.next = 4;
          return arr[i];

        case 4:
          i++;
          _context.next = 1;
          break;

        case 7:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

var gen = makeIterator(['吃饭', '睡觉', '打豆豆']);

console.log('首先', gen.next().value);
console.log('其次', gen.next().value);
console.log('然后', gen.next().value);
console.log('最后', gen.next().done);
//# sourceMappingURL=iterator.js.map
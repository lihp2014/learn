const Koa = require('koa')
const logger = require('koa-logger')
const session = require('koa-session')
const app = new Koa()

app.keys = ['hi luke']

// const mid1 = async (ctx, next) => {
//   ctx.body = 'hi'
//   await next()
//   ctx.body = ctx.body + ' There'
// }

// const mid2 = async (ctx, next) => {
//   ctx.type = 'text/html; charset=utf-8'
//   await next()
// }

// const mid3 = async (ctx, next) => {
//   ctx.body = ctx.body + 'luke'
//   await next()
// }

// function tail (i) {
//   if (i > 3) return i 
//   console.log('修改前', i)
//   return tail(i + 1)
// }
// tail(0)

app.use(logger());
// app.use(mid1)
// app.use(mid2)
// app.use(mid3)
app.use(session(app))


app.use(ctx => {
  if (ctx.path === '/favicon') return
  if (ctx.path === '/') {
    let n = ctx.session.views || 0
    ctx.session.views = ++n
    ctx.body = n + 'views'
  } else if (ctx.path === '/hi') {
    ctx.body = 'hi luke'
  } else {
    ctx.body = '404'
  }
})

app.listen(2333)
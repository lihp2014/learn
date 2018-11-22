const Koa = require('koa')
const app = new Koa()

const logger = require('koa-logger')

const indent = (n) => new Array(n).join('&nbsp;')

const mid1 = (n) => {
    return async (ctx, next) => {
        ctx.body = `<h3>请求 => 第一层中间件</h3>`
        await next()
        ctx.body += `<h3>响应 <= 第一层中间件</h3>`
    }
}

const mid2 = (n) => {
    return async (ctx, next) => {
        ctx.body += `<h3>${indent(4)}请求 => 第二层中间件</h3>`
        await next()
        ctx.body += `<h3>${indent(4)}响应 <= 第二层中间件</h3>`
    }
}

const mid3 = (n) => {
    return async (ctx, next) => {
        ctx.body += `<h3>${indent(8)}请求 => 第三层中间件</h3>`
        await next()
        ctx.body += `<h3>${indent(8)}响应 <= 第三层中间件</h3>`
    }
}

app.use(logger())
app.use(mid1())
app.use(mid2())
app.use(mid3())

app.use(function *(ctx, next) {
    ctx.body += `<p style="color: red">${indent(12)}Koa 核心 处理业务</p>`
})

app.listen(2333)
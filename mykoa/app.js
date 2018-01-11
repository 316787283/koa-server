const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
let router = new Router
var myRouter = require('./router/router.js')
router.get('/', async (ctx) => {
    console.log(321)
})
router.get('/:controller', async (ctx) => {
    try{
        let urls = ctx.request.url.split('/')
        if(urls.length >= 2){
            myRouter.route('default', urls[1], 'index', ctx)
        }
    }catch(e){

    }
})
router.get('/:controller/:action', async (ctx) => {
    try{
        let urls = ctx.request.url.split('/')
        await myRouter.route('default', urls[1], urls[2], ctx) 
        console.log(ctx.request.url)
    }catch(e){
        console.log(e)
    }
})
app.use(router.routes()).use(router.allowedMethods())
app.listen(3000, () => {console.log(1111)})
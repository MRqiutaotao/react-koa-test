import koa from "koa"
import path from "path"
import views from "koa-view"
import statics from "koa-static"
import Router from "koa-router"

import Index from "../server/routers/index"

const app = new koa();
app.use(statics(path.resolve(path.dirname("./"), "static")));

// 加载模板引擎
app.use(views(path.resolve(path.dirname("./"),"views"),
    {
        map: { html: 'nunjucks' }
    }
))

// app.use( async ( ctx ) => {
//     await ctx.render('index')
// })

// 初始化路由中间件
app.use(Index(Router));

app.listen(5001, () => {
    console.log(`Server started on 5001`)
})

export default app
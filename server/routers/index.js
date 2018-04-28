export default function(Router) {
	const router = new Router();
	router.get("/",async (ctx,next) => {
        await ctx.render('index',{
            title:"管理系统"
        })
	})
	router.get("/test",async (ctx,next) => {
		ctx.response.body="<h1>test</h1>"
	})

	return router.routes()
}
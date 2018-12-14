import { db } from "../db";
export default function(Router) {
  const router = new Router();
  router.get("/", async (ctx, next) => {
    ctx.response.body = "hello world";
  });
  router.get("/api/getlist", async (ctx, next) => {
    const collection = db.get("message");
    const list = await collection.findOne({ name: "message" });
    ctx.response.body = {
      code: "200",
      message: "success",
      data: list.list
    };
  });

  return router.routes();
}

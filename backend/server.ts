import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import "https://deno.land/x/dotenv/load.ts";

const app = new Application();
const port: number = 9001;

const router = new Router();
router.get("/", ({ response }: { response: any }) => {
  response.body = {
    message: "Backe",
  };
});
app.use(router.routes());
app.use(router.allowedMethods());

console.log('running on port ', Deno.env.get("BACKEND_PORT"));
await app.listen({ port });
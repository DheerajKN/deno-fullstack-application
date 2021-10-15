import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import 'https://deno.land/x/dotenv/load.ts';

import router from "./routes.ts";
const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

const port: number = parseInt(Deno.env.get("BACKEND_PORT")!);
console.log('running on port', port);
await app.listen({port});
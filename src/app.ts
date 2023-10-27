import Koa, { Context, Next } from 'koa';
import bodyParser from 'koa-bodyparser';
import { createLogger } from './shared-middleware/observability';
import { userRouter } from './users/routes';
import { authorizeUser } from './shared-middleware/userAuthorization';

const app = new Koa();
const port = process.env.PORT || 3001;

app.use(bodyParser());
app.use(async (ctx: Context, next: Next) => {
   ctx.state.logger = createLogger(ctx);
   await next();
})
app.use(authorizeUser)
app.use(userRouter.routes());
app.listen(port);

console.log(`Server running on port ${port}`);

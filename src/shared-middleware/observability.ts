import { Context } from 'koa';

export interface Logger {
  logError: (message: string) => void;
}

export function createLogger(ctx: Context): Logger {
  return {
    logError(message: string) {
      console.error(
        `ERROR | RequestId: ${ctx.state.requestId} | Method: ${ctx.request.method} | Path: ${ctx.request.path} | ${message}`
      );
    },
  };
}

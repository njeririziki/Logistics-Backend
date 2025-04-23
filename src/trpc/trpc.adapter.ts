import { createExpressMiddleware } from '@trpc/server/adapters/express';
import { appRouter } from './trpc.router';

export const trpcMiddleware = createExpressMiddleware({
  router: appRouter,
  createContext: () => ({}), // optional context
});

import { Application } from 'oak/mod.ts';
import logger from './middlewares/logger.ts';
import { router } from './router.ts';

_main({ port: 8000 });

async function _main({ port }: { port: number }) {
  const app = new Application();

  app.use(logger.logger);
  app.use(logger.responseTime);

  app.use(router.routes());
  app.use(router.allowedMethods());

  app.addEventListener('listen', ({ port }) => {
    const url = `'http://localhost:${port}`;

    console.log(`Listening on ${url} !`);
  });

  await app.listen({ port });
}

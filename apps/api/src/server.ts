import { app } from './app.js';
import { env } from './config/env.js';
import { AppDataSource } from './data-source.js';

async function bootstrap(): Promise<void> {
  await AppDataSource.initialize();
  app.listen(env.PORT, () => {
    console.log(`Listening on http://localhost:${env.PORT}`);
  });
}

bootstrap().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});

import express from 'express';
import type { Express, Request, Response } from 'express';
import { AppDataSource } from './data-source.js';
import { errorHandler } from './middleware/errorHandler.js';

export const app: Express = express();

app.use(express.json());

app.get('/health', async (_req: Request, res: Response) => {
  try {
    await AppDataSource.query('SELECT 1');
    res.json({ status: 'ok', db: 'up' });
  } catch {
    res.status(503).json({ status: 'error', db: 'down' });
  }
});

app.use((_req: Request, res: Response) => {
  res.status(404).json({ error: 'Not Found' });
});

app.use(errorHandler);

import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { env } from './config/env.js';
import { Service } from './entities/service.js';
import { Provider } from './entities/provider.js';
import { Client } from './entities/client.js';
import { Slot } from './entities/slot.js';
import { WaitlistEntry } from './entities/waitlistEntry.js';
import { Offer } from './entities/offer.js';
import { Booking } from './entities/booking.js';

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: env.DATABASE_URL,
  synchronize: false,
  logging: env.NODE_ENV === 'development',
  entities: [Service, Provider, Client, Slot, WaitlistEntry, Offer, Booking],
  migrations: ['src/migrations/*.ts'],
});

import 'reflect-metadata';
import { useExpressServer } from 'routing-controllers';
import express from 'express';

const app = express();

useExpressServer(app, {
  routePrefix: '/api',
  cors: true,
  controllers: [`${__dirname}/features/**/*Controller.ts`],
});

export default app;

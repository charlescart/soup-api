/* eslint-disable no-console */
import 'reflect-metadata';
import { useExpressServer } from 'routing-controllers';
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

useExpressServer(app, {
  routePrefix: '/api',
  cors: true,
  controllers: [`${__dirname}/features/**/*Controller.js`],
});

app.listen(port, () => {
  console.log(`Run in the port ${port}`);
});

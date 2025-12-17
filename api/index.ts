import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from '../src/app.module';
import express from 'express';

const server = express();
let app;

async function bootstrap() {
  if (!app) {
    app = await NestFactory.create(
      AppModule,
      new ExpressAdapter(server),
    );
    
    app.enableCors({
      origin: '*',
      credentials: true,
    });
    
    await app.init();
  }
  return server;
}

export default async (req, res) => {
  const handler = await bootstrap();
  return handler(req, res);
};
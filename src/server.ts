import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import serverless from 'serverless-http';

let server: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // allow your Expo app to call API
  await app.init();
  const expressApp = app.getHttpAdapter().getInstance(); // get underlying Express instance
  server = serverless(expressApp);
  return server;
}

// export handler for Vercel
export const handler = async (event: any, context: any) => {
  if (!server) await bootstrap();
  return server(event, context);
};

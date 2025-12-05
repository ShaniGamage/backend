import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS
  app.enableCors({
    origin: '*',
    credentials: true,
  });

  await app.listen(3001, '0.0.0.0');
  console.log('🚀 Backend running on http://localhost:3001');
  console.log('📱 Mobile access: http://192.168.1.12:3001');
}

bootstrap();
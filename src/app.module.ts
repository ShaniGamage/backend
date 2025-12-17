import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { SosModule } from './service/sos/sos.module'; // Import the MODULE
import { ReportsModule } from './reports/reports.module';
import { HarassmentReportModule } from './service/harassment-report/harassment-report.module';
import { PostModule } from './service/post/post.module';
import { HeatmapModule } from './service/heatmap/heatmap.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DB_HOST,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true,
      ssl: { rejectUnauthorized: false },
      extra: {
        keepAlive: true,
        idleTimeoutMillis: 30000,
      }
    }),
    SosModule,
    ReportsModule, HarassmentReportModule, PostModule, HeatmapModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
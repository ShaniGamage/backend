import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SosController } from './sos.controller';
import { SosService } from './sos.service';
import { Sos } from '../../models/sos';

@Module({
  imports: [TypeOrmModule.forFeature([Sos])],
  controllers: [SosController],
  providers: [SosService],
  exports: [SosService], 
})
export class SosModule {}
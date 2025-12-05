import { Body, Controller, Post, UseGuards, Logger } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { SosDto } from 'src/dto/sos.dto';
import { SosService } from './sos.service';

@Controller('sos')
export class SosController {
    private readonly logger = new Logger(SosController.name);

    constructor(private sosService: SosService) { }

    @Post('')
    async createSOS(@Body() body: SosDto) {
        console.log('SOS endpoint hit');
        this.logger.log('Received payload:', JSON.stringify(body));

        try {
            const result = await this.sosService.handleSOS(body);
            this.logger.log('SOS handled successfully');
            return result;
        } catch (error) {
            this.logger.error('SOS handling failed:', error);
            throw error;
        }
    }
}
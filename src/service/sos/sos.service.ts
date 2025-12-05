import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sos } from 'src/models/sos';
import axios from 'axios'
import { SosDto } from 'src/dto/sos.dto';

@Injectable()
export class SosService {
    private readonly logger = new Logger(SosService.name);

    constructor(
        @InjectRepository(Sos)
        private sosRepo: Repository<Sos>,
    ) { }

    async handleSOS(data: SosDto) {
        try {
            const sos = this.sosRepo.create(data);
            await this.sosRepo.save(sos);

            await this.notifyContacts(data);
            return { success: true, message: 'SOS sent successfully' };
        } catch (error) {
            this.logger.error('SOS handling failed:', error);
            throw error;
        }
    }

    async notifyContacts(data: SosDto) {
        const API_KEY = '3633|K2xxEIbyxPhQRPKngCaouR0qjjoxmXmFCvcYov8c '; // <— Replace
        const contacts = ['94759971197', '94754660533']; // numbers without +

        for (const number of contacts) {
            try {
                const message = `🚨 SOS ALERT 🚨
Location: ${data.address}
Google Maps: https://maps.google.com/?q=${data.latitude},${data.longitude}`;

                const response = await axios.post(
                    'https://sms.send.lk/api/v3/',
                    {
                        recipient: number,
                        sender_id: 'SendLK',
                        message,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${API_KEY}`,
                            'Content-Type': 'application/json',
                        },
                    }
                );

                this.logger.log(`SMS Sent → ${number} Status: ${response.data.status}`);
            } catch (err) {
                this.logger.error(`Failed for ${number} → ${err.message}`);
            }
        }
    }
}
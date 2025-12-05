import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HarassmentReportDto } from 'src/dto/harassment-report.dto';
import { HarassmentReport } from 'src/models/harassment-report';
import { Repository } from 'typeorm';

@Injectable()
export class HarassmentReportService {
    private readonly logger = new Logger(HarassmentReportService.name)

    constructor(
        @InjectRepository(HarassmentReport)
        private readonly harassmentReportRepo : Repository<HarassmentReport>
    ){}

    async saveHarassmentReport(data: HarassmentReportDto){
        try{
            // if anonymous then no userId
            if(data.anonymous){
                data.userId=''
            }
            data.createdAt= new Date()
            const harassmentReport = this.harassmentReportRepo.create(data);
            await this.harassmentReportRepo.save(harassmentReport)

            return {success:true, message:'Report saved successfully'}

        }catch(error){
            this.logger.error('Harassment report saving failed',error)
            throw error
        }
    }
}

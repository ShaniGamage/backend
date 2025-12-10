import { Body, Controller, Get, Logger, Post, Query } from '@nestjs/common';
import { HarassmentReportDto } from 'src/dto/harassment-report.dto';
import { HarassmentReportService } from './harassment-report.service';

@Controller('report-harassment')
export class HarassmentReportController {
    private readonly logger = new Logger(HarassmentReportController.name)

    constructor(private harassmentReportService: HarassmentReportService){}

    @Post('')
    async createHarassmentReport(@Body() body:HarassmentReportDto){
        console.log('harassment report endpoint hit')
        this.logger.log('received payload:', JSON.stringify(body))

        try{
            const result = await this.harassmentReportService.saveHarassmentReport(body)
            this.logger.log('Harassment report saved successfully')
            return result
        }catch(error){
            this.logger.error('report saving failed',error)
            throw error
        }
    }

    @Get()
    async getReports(@Query('vehicleNo') vehicleNo:string){
        if(!vehicleNo){
            return{message:"Vehicle number is required"}
        }

        const results = await this.harassmentReportService.getReports(vehicleNo)
        return results
    }
}

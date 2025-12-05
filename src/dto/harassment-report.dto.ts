export class HarassmentReportDto {
    userId?: string;
    location:string;
    latitude: number;
    longitude: number;
    vehicleNumber?: string;
    harassmentType: string;
    extraInfo?: string;
    anonymous?: boolean;
    image?: string;
    createdAt:Date;

}

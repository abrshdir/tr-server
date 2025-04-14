import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class TrackingService {
  private readonly logger = new Logger(TrackingService.name);

  handleTrackingData(data: any) {
    // Log the received data
    this.logger.log(`Received tracking data - Latitude: ${data.lat}, Longitude: ${data.lng}, Number: ${data.num}`);
    
    // Here you could add database storage similar to the PHP implementation
    // For example, using TypeORM or another database integration
    
    // Return a response similar to the PHP script
    return { 
      status: 'Accepted',
      message: 'GPS coordinates received successfully',
      data: {
        latitude: data.lat,
        longitude: data.lng,
        number: data.num
      }
    };
  }
}
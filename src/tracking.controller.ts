import { Controller, Post, Get, Body, Headers, Query, HttpException, HttpStatus } from '@nestjs/common';
import { TrackingService } from './tracking.service';

@Controller('tracking')
export class TrackingController {
  constructor(private readonly trackingService: TrackingService) {}

  @Post()
  create(@Body() data: any, @Headers('authorization') auth: string) {
    if (auth !== 'Basic your-secret-auth-key') {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }
    return this.trackingService.handleTrackingData(data);
  }

  @Get()
  getTracking(
    @Query('lat') lat: string,
    @Query('lng') lng: string,
    @Query('num') num: string,
    @Headers('authorization') auth: string,
  ) {
    // Simple authentication check
    if (auth !== 'Basic your-secret-auth-key') {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }
    
    // Parse the coordinates
    const data = {
      lat: parseFloat(lat) || 0,
      lng: parseFloat(lng) || 0,
      num: num || 'unknown'
    };
    
    return this.trackingService.handleTrackingData(data);
  }
}
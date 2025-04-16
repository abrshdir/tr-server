import { Controller, Post, Get, Body, Headers, Query, HttpException, HttpStatus } from '@nestjs/common';
import { TrackingService } from './tracking.service';

@Controller('tracking')
export class TrackingController {
  constructor(private readonly trackingService: TrackingService) {}

  @Post()
  create(@Body() data: any) {
    return this.trackingService.handleTrackingData(data);
  }

  @Get()
  getTracking(
    @Query('lat') lat: string,
    @Query('lng') lng: string,
    @Query('num') num: string,
  ) {
    const data = {
      lat: parseFloat(lat) || 0,
      lng: parseFloat(lng) || 0,
      num: num || 'unknown'
    };
    return this.trackingService.handleTrackingData(data);
  }
}
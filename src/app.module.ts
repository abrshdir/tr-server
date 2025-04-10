import { Module } from '@nestjs/common';
import { TrackingModule } from './tracking.module';

@Module({
  imports: [TrackingModule],
})
export class AppModule {}
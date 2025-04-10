import { Controller, Post, Body, Headers } from '@nestjs/common';

@Controller('tracking')
export class TrackingController {
    @Post()
    create(@Body() data: any, @Headers('authorization') auth: string) {
        // Basic authentication check
        if (auth !== 'Basic your-secret-auth-key') {
            return { status: 'error', message: 'Unauthorized' };
        }

        console.log('Received GPS data:', data);
        // Here you can save to database or process further
        return { status: 'success', data };
    }
}
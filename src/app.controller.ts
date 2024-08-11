import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags()
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('health')
  @ApiOperation({ summary: "그놈에 헬스체크"})
  @ApiResponse({ status: 200, description: "건강합니다."})
  healthcheck() {
    return "healthy";
  }
}

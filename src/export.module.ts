import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { GreetService } from './greet.service'

@Module({
  providers: [MessageService, GreetService],
  exports: [MessageService, GreetService]
})
export class ExportModule {}

import { Injectable,Logger } from '@nestjs/common';


@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name); // Usa winston por debajo

  constructor(){}

  getHello(): string {
    this.logger.log('Se realizo peticion a getHello')
    return 'Hello World!';
  }
}

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    bufferLogs:true
  });

  // Config logger
  const logger = app.get(WINSTON_MODULE_NEST_PROVIDER);
  app.useLogger(logger); // para hacer global el logger de winston
  
  // Configuracion de Swagger para la documentacion de los Modulos 
  const config = new DocumentBuilder()
      .setTitle('DOCUMENTACION TEST API')
      .setDescription('API de prueba para testing, basado en un negocio de adopcion de mascotas')
      .setVersion('1.0')
      .addTag('users')
      .addTag('pets')
      .build();
  const document = SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('api/docs',app,document);
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

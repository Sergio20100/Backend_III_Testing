import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PetsModule } from './pets/pets.module';
import { SessionsModule } from './sessions/sessions.module';
import { MocksModule } from './mocks/mocks.module';
import { AdoptionsModule } from './adoptions/adoptions.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { WinstonModule } from 'nest-winston';
import { winstonConfig } from './logger/winston-config';

@Module({
  imports: [
            WinstonModule.forRoot(winstonConfig),
            UsersModule, 
            PetsModule, 
            SessionsModule, 
            MocksModule, 
            AdoptionsModule, 
            ConfigModule.forRoot(), 
            MongooseModule.forRootAsync({
              imports: [ConfigModule],
              inject: [ConfigService],
              useFactory: async (config: ConfigService) => ({
                uri: `mongodb+srv://${config.get<string>('MONGO_USER')}:${config.get<string>('MONGO_PASS')}@clusterfortesting.vjjjwap.mongodb.net/${config.get<string>('MONGODB_DBNAME')}?retryWrites=true&w=majority&appName=ClusterForTesting`
    })
  })  
          ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

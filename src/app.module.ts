import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from "./modules/users.module";

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), MongooseModule.forRoot(process.env.MONGODB_URL, {
    autoCreate: true,
  }),
        UsersModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

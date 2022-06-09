import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from '../controllers/users.controller';
import { UsersService } from '../services/users.service';
import { UsersRepo } from '../repository/users.repo';
import { Users, UsersSchema } from '../schemas/users.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Users.name, schema: UsersSchema }])
    ],
    controllers: [UsersController],
    providers: [UsersService, UsersRepo],
    exports: [UsersService, UsersRepo]
  })
  export class UsersModule { }
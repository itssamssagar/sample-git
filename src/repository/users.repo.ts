import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users, UsersDocument } from 'src/schemas/users.schema';

@Injectable()
export class UsersRepo {
    constructor(
        @InjectModel(Users.name)
        private readonly usersModel: Model<UsersDocument>) {}

    async create(data): Promise<Users> {
        return new this.usersModel(data).save();
    }

    async findAll(): Promise<Users[]> {
        return this.usersModel.find({})
            .exec();
    }

    async update(usersId, data): Promise<Users> {
        const filter = { _id: usersId };
        return this.usersModel.findOneAndUpdate(filter, data);
    }

    async delete(usersId): Promise<Users> {
        const filter = { _id: usersId };
        return this.usersModel.findByIdAndDelete(usersId);
    }
}
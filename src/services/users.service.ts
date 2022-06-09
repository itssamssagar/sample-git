import { Injectable } from '@nestjs/common';
import { UsersRepo } from '../repository/users.repo';
import { Users } from '../schemas/users.schema';

@Injectable()
export class UsersService {
    constructor(
        private readonly usersRepo: UsersRepo
    ) { }

    async findAll(): Promise<Users[]> {
        return this.usersRepo.findAll();
    }

    async create(data): Promise<Users> {
        data.createddate = new Date();
        return this.usersRepo.create(data);
    }

    async update(usersId, data): Promise<Users> {
        return this.usersRepo.update(usersId, data);
    }

    async delete(usersId): Promise<Users> {
        return this.usersRepo.delete(usersId);
    }
}
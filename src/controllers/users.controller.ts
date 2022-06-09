import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsersDto } from '../dto/users-dto.dto';
import { UsersService } from '../services/users.service';


@Controller('Users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post()
    async create(@Body() usersDto: UsersDto) {
        const res = this.usersService.create(usersDto);
        return res;
    }

    @Get()
    async findAll() {
        return this.usersService.findAll();
    }

    @Post('/:id')
    update(@Param('id') id: string, @Body() usersDto: UsersDto) {
        return this.usersService.update(id, usersDto);
    }

    @Delete('/:id')
    delete(@Param('id') id: string) {
        return this.usersService.delete(id);
    }
}
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { productDto } from '../dto/product-dto.dto';
import { productService } from '../services/product.service';


@Controller('product')
export class productController {
    constructor(private readonly productService: productService) { }

    @Post()
    async create(@Body() productDto: productDto) {
        const res = this.productService.create(productDto);
        return res;
    }

    @Get()
    async findAll() {
        return this.productService.findAll();
    }

    @Post('/:id')
    update(@Param('id') id: string, @Body() productDto: productDto) {
        return this.productService.update(id, productDto);
    }

    @Delete('/:id')
    delete(@Param('id') id: string) {
        return this.productService.delete(id);
    }
}
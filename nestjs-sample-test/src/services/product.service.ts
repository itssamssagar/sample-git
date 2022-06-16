import { Injectable } from '@nestjs/common';
import { productRepo } from '../repository/product.repo';
import { product } from '../schemas/product.schema';

@Injectable()
export class productService {
    constructor(
        private readonly productRepo: productRepo
    ) { }

    async findAll(): Promise<product[]> {
        return this.productRepo.findAll();
    }

    async create(data): Promise<product> {
        data.createddate = new Date();
        return this.productRepo.create(data);
    }

    async update(productId, data): Promise<product> {
        return this.productRepo.update(productId, data);
    }

    async delete(productId): Promise<product> {
        return this.productRepo.delete(productId);
    }
}
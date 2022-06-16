import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { product, productDocument } from 'src/schemas/product.schema';

@Injectable()
export class productRepo {
    constructor(
        @InjectModel(product.name)
        private readonly productModel: Model<productDocument>) {}

    async create(data): Promise<product> {
        return new this.productModel(data).save();
    }

    async findAll(): Promise<product[]> {
        return this.productModel.find({})
            .exec();
    }

    async update(productId, data): Promise<product> {
        const filter = { _id: productId };
        return this.productModel.findOneAndUpdate(filter, data);
    }

    async delete(productId): Promise<product> {
        const filter = { _id: productId };
        return this.productModel.findByIdAndDelete(productId);
    }
}
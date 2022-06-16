import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { productController } from '../controllers/product.controller';
import { productService } from '../services/product.service';
import { productRepo } from '../repository/product.repo';
import { product, productSchema } from '../schemas/product.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: product.name, schema: productSchema }])
    ],
    controllers: [productController],
    providers: [productService, productRepo],
    exports: [productService, productRepo]
  })
  export class productModule { }
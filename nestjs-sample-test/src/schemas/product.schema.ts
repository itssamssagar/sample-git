import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type productDocument = product & Document;

@Schema()
export class product {
   
   @Prop()
   product_id: string; 
   
   @Prop()
   product_name: string; 
   
   @Prop()
   quantity: int; 
   
   @Prop()
   discount: decimal; 
   
}

export const productSchema = SchemaFactory.createForClass(product);
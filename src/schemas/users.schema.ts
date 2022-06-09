import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UsersDocument = Users & Document;

@Schema()
export class Users {
   
   @Prop()
   user_id: string; 
   
   @Prop()
   user_name: string; 
   
}

export const UsersSchema = SchemaFactory.createForClass(Users);
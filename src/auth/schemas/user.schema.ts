import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class User extends Document {
  @Prop()
  name: string;
  @Prop()
  email: string;
  @Prop()
  senha: string;
  @Prop()
  telefone: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

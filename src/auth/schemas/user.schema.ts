import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class User {
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

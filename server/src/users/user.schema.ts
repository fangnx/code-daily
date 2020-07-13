import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: [] })
  favoriteTags: Array<string>;

  @Prop({ default: [] })
  subscribedTags: Array<string>;

  @Prop({ default: false })
  isSubscribed: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);

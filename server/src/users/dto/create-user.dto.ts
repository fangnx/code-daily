import { Document } from 'mongoose';

export interface CreateUserDto extends Document {
  readonly email: string;
}

import { Document } from 'mongoose';

export interface User extends Document {
  readonly email: string;
  readonly password: string;
  readonly isEmailVerified: boolean;
  readonly favoriteTags: Array<string>;
  readonly isSubscribed: boolean;
}

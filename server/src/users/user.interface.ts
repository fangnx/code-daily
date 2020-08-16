import { Document } from 'mongoose';

export interface User extends Document {
  readonly email: string;
  readonly password: string;
  readonly favoriteTags: Array<string>;
  readonly subscribedTags: Array<string>;
  readonly pocketAccessToken: string;
  readonly pocketUserName: string;
  readonly isSubscribed: boolean;
}

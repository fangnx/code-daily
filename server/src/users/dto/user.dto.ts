export interface UserDto {
  readonly email: string;
  readonly favoriteTags: Array<string>;
  readonly subscribedTags: Array<string>;
  readonly isSubscribed: boolean;
}

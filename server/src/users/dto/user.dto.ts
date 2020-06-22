export interface UserDto {
  readonly email: string;
  readonly isEmailVerified: boolean;
  readonly favoriteTags: Array<string>;
  readonly isSubscribed: boolean;
}

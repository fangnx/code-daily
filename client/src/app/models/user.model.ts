export interface UserAuth {
  email: string;
  accessToken: string;
  expiresIn: string;
}

export interface User {
  email: string;
  isEmailVerified: boolean;
  isSubscribed: boolean;
  favoriteTags: Array<string>;
  subscribedTags: Array<string>;
  pocketAccessToken: string;
  pocketUserName: string;
}

export interface CreateUserDto {
  email: string;
  password: string;
}

export interface LoginUserDto {
  email: string;
  password: string;
}

export interface GetUserQuery {
  email: string;
}

export interface UserAuth {
  email: string;
  accessToken: string;
  expiresIn: string;
}

export interface User {}

export interface CreateUserDto {
  email: string;
  password: string;
}

export interface LoginUserDto {
  email: string;
  password: string;
}

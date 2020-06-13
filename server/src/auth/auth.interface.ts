export interface RegistrationStatus {
  isSuccessful: boolean;
  message: string;
}

export interface LoginStatus {
  email: string;
  accessToken: any;
  expiresIn: any;
}

export interface Payload {
  email: string;
}

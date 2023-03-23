export interface ILoginResponse {
  accessToken: string;
  refreshToken: string;
}

export interface IDecodeToken {
  exp: number;
  iat?: number;
  id?: string;
}

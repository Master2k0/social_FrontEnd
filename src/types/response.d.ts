export interface IResponse<T = unknown> {
  code: number;
  data: T;
  message: string;
}

export interface IResponseError {
  statusCode: number;
  data: null;
  message: string;
}

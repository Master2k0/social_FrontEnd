export interface IResponse<T = unknown> {
  code: number;
  data: T;
  message: string;
  timestamp: number;
}

export interface IResponseError {
  code: number;
  data: null;
  message: string;
  timestamp: number;
}

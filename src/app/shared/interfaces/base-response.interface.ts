export interface BaseResponse<T> {
  success: boolean;
  errorMessages: string[];
  statusCode: number;
  result: T;
}

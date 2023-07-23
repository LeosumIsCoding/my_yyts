import { ArgumentsHost, Catch, ExceptionFilter, Logger, Inject, HttpException } from '@nestjs/common';
import { ErrorCode, Result } from '@t/Result';
// import Result from '@t/Result';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {

  constructor(
    private readonly logger: Logger,
  ) { }
  catch(exception: HttpException, host: ArgumentsHost) {
    this.logger.error(exception)
    const ctx = host.switchToHttp();
    const response = ctx.getResponse()
    const request = ctx.getRequest();
    const status = exception.getStatus()
    if (status >= 250 && status < 300) {
      // 设置 statusText
      response
        .status(exception.getStatus()) 
        .json(Result.error(status, exception.message));
      return
    }
    response
      .status(ErrorCode.UnknowException)
      .json(Result.error(ErrorCode.UnknowException,"未知错误, 请联系管理员"));
  }
}

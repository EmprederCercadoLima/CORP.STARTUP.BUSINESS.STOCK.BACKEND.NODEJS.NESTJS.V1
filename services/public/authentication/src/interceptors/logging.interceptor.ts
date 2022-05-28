import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common'
import { Observable, tap } from 'rxjs'

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggingInterceptor.name)

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now()
    return next.handle().pipe(
      tap(() => {
        const url = context.switchToHttp().getResponse().req.url
        this.logger.log(`${LoggingInterceptor.name}::${url}::response::time [${Date.now() - now}ms]`)
      }),
    )
  }
}

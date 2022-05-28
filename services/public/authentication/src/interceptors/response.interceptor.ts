import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common'
import { map, Observable } from 'rxjs'
import { ResponseInterface } from '../interfaces'

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, ResponseInterface<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<ResponseInterface<T>> {
    return next.handle().pipe(map(data => ({ data })))
  }
}

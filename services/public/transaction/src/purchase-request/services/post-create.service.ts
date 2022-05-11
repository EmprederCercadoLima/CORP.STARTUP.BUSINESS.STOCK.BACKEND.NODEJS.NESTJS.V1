import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PostCreateDto } from '../dto';

@Injectable()
export class PostCreateService {
  private readonly logger: Logger;

  constructor() {
    this.logger = new Logger(PostCreateService.name);
  }

  execute(postCreate: PostCreateDto) {}
}

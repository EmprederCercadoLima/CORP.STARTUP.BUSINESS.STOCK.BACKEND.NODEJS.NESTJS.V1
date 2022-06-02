import { Injectable, Logger } from '@nestjs/common'
import { OnEvent } from '@nestjs/event-emitter'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { HashesRemoveHashEvent } from '../events'
import { Hashes, HashesDocument } from '../schemas'
import { listenerConfig } from '../config/constant-listener.config'

@Injectable()
export class HashesListener {
  private readonly logger: Logger

  constructor(
    @InjectModel(Hashes.name)
    private readonly hashesModule: Model<HashesDocument>,
  ) {
    this.logger = new Logger(HashesListener.name)
  }

  @OnEvent(listenerConfig.hashes.event_remove_hash)
  async onEventRemoveHash(event: HashesRemoveHashEvent) {
    this.logger.log(`onEventRemoveHash: event ${JSON.stringify(event)}`)
    this.hashesModule.findByIdAndDelete(event.idHash).exec()
  }
}

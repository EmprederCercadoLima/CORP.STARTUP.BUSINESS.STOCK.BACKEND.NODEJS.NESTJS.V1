import { HttpException, Injectable, Logger } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import * as moment from 'moment'
import * as crypto from 'crypto'
import { Hashes, HashesDocument } from '../schemas/hashes.schema'

@Injectable()
export class GetHashService {
  private readonly logger: Logger

  constructor(
    @InjectModel(Hashes.name)
    private readonly hashesModule: Model<HashesDocument>,
  ) {
    this.logger = new Logger(GetHashService.name)
  }

  async execute() {
    try {
      const generateHashes = this.generateHashes()
      const generateKeys = this.generateKeys()
      const create = await this.create(generateHashes, generateKeys)
      return {
        id: create._id,
        hashes: create.hashes,
        keys: create.keys,
      }
    } catch (error) {
      const { response } = error
      this.logger.error(`error::execute::${JSON.stringify(response.statusCode)}::${JSON.stringify(response.message)}`)
      throw new HttpException(response.message, response.statusCode)
    }
  }

  private generateHashes = () => {
    return {
      fromHash: this.generateRandomByteMD5(),
      toHash: this.generateRandomByteMD5(),
    }
  }

  private generateKeys = () => {
    return {
      fromKeyHex: this.generateRanbomByteBuffer(),
      toKeyHex: this.generateRanbomByteBuffer(),
    }
  }

  private generateAuditProperties = () => {
    return {
      userCreate: 'WEB',
      userUpdate: null,
      dateCreate: moment.utc(),
      dateUpdate: null,
      recordActive: true,
    }
  }

  private generateRandomByteMD5 = () => {
    return crypto.createHash('md5').update(crypto.randomBytes(16)).digest('hex')
  }

  private generateRanbomByteBuffer = () => {
    const ranbomByteBuffer = Buffer.from(crypto.randomBytes(8))
    return ranbomByteBuffer.toString('hex')
  }

  private create = async (generateHashes: any, generateKeys: any) => {
    const hash = await this.hashesModule.create({
      algorithm: 'md5',
      hashes: {
        from: generateHashes.fromHash,
        to: generateHashes.toHash,
      },
      keys: {
        from: generateKeys.fromKeyHex,
        to: generateKeys.toKeyHex,
      },
      auditProperties: this.generateAuditProperties(),
    })

    return hash
  }
}

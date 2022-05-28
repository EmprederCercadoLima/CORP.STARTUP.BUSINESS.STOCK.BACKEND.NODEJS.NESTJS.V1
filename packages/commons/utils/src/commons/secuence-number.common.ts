import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class SecuenceNumberCommon {
  private static logger: Logger = new Logger(SecuenceNumberCommon.name);
  static execute(secuenceCurrentValue: number, secuenceCurrentPrefix: string) {
    try {
      secuenceCurrentValue++;
      let secuenceNumber = secuenceCurrentPrefix;

      switch (true) {
        case secuenceCurrentValue < 10:
          secuenceNumber = `${secuenceNumber}000${secuenceCurrentValue}`;
          break;
        case secuenceCurrentValue < 99 && secuenceCurrentValue > 9:
          secuenceNumber = `${secuenceNumber}00${secuenceCurrentValue}`;
          break;
        case secuenceCurrentValue < 1000 && secuenceCurrentValue > 99:
          secuenceNumber = `${secuenceNumber}0${secuenceCurrentValue}`;
          break;
        default:
          secuenceNumber = secuenceNumber + secuenceCurrentValue;
          break;
      }

      this.logger.log(
        `${SecuenceNumberCommon.name}::execute::${secuenceNumber}`,
      );
      return secuenceNumber;
    } catch (error) {
      this.logger.log(`Error::${SecuenceNumberCommon.name}::execute::`, error);
      throw new Error();
    }
  }
}

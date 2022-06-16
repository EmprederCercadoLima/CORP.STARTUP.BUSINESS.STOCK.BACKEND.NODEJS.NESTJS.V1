import { Injectable } from '@nestjs/common'
import * as CryptoJs from 'crypto-js'

@Injectable()
export class CryptoUtil {
  static encryptData = (encryptText: string, hash: string, key: string) => {
    return CryptoJs.AES.encrypt(encryptText, CryptoJs.enc.Utf8.parse(hash), {
      iv: CryptoJs.enc.Utf8.parse(key),
    }).toString()
  }

  static decryptData = (cryptText, hash, key) => {
    const cipherParams = CryptoJs.lib.CipherParams.create({
      ciphertext: CryptoJs.enc.Base64.parse(cryptText),
    })
    const decryptedFromText = CryptoJs.AES.decrypt(cipherParams, CryptoJs.enc.Utf8.parse(hash), { iv: CryptoJs.enc.Utf8.parse(key) })
    return decryptedFromText.toString(CryptoJs.enc.Utf8)
  }
}

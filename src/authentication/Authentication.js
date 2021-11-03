import cryptoJs from "crypto-js";
import { hashString } from 'react-hash-string';

export function getCrypto() {
      let encryptedData = sessionStorage.getItem("crypto");
      return decrypt(encryptedData);
}

export function setCrypto(data){
        let encryptedData = encrypt(data);
        sessionStorage.setItem("crypto", encryptedData);
}

export function setPrivateKey(accessToken) {
        let privateKey = hashString(accessToken);
        sessionStorage.setItem("privateKey", privateKey);
}

export function getPrivateKey() {
        return sessionStorage.getItem("privateKey");
}

export function encrypt(data) {
     return cryptoJs.AES.encrypt(JSON.stringify(data), getPrivateKey().toString()).toString();
}

export function decrypt(encryptedData) {
        return JSON.parse(cryptoJs.AES.decrypt(encryptedData, getPrivateKey()).toString(cryptoJs.enc.Utf8));
}

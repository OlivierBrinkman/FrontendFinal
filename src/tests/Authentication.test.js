import { hashString } from 'react-hash-string';
import {getCrypto, setCrypto, setPrivateKey, getPrivateKey, encrypt, decrypt} from "../components/Authentication";
//Create test object
const data = {
    accessToken: "textForTestingPurposes",
    email : "jonhdoe@gmail.com",
    username : "john doe"
}

//Test encrypting accessToken - Authentication.js
test("create privateKey by encrypting accessToken " , () => {
    //Set privateKey by hasing the string
    setPrivateKey("textForTestingPurposes");
    expect(hashString("textForTestingPurposes")+"").toEqual(getPrivateKey())  
})

//Test encrypting and decrypting data with privateKey - Authentication.js
test("encrypting data by privateKey" , () => {
    //Set privateKey by hashingS the string
    setPrivateKey(data.accessToken);

    //encrypt and decrypt 
    const encryptedData = encrypt(data); 
    const decryptedData = decrypt(encryptedData);
    
    //check if they are the same 
    expect(data).toEqual(decryptedData);
})

//Test setting and getting crypto from session storage - Authentication.js
test("encrypting data by privateKey" , () => {
    //Set object
    setCrypto(data)

    //Get object 
   const get = getCrypto()
    
    //check if they are the same 
    expect(get).toEqual(data);
})

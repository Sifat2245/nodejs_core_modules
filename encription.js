const crypto = require('crypto')

const algorithm = 'aes-256-cbc'

const key = crypto.randomBytes(32)
const iv = crypto.randomBytes(16)

// text encryption
const encrypt =(text) =>{
    const cipher = crypto.createCipheriv(algorithm, key, iv)
    let encrypted = cipher.update(text, 'utf-8', 'hex')
    encrypted += cipher.final('hex')

    return {
        iv: iv.toString('hex'),
        encryptedData: encrypted
    }
}

//text decryption

const decrypt  = (encryptedData, ivHex ) =>{
    const decipher = crypto.createDecipheriv(algorithm, key, Buffer.from(ivHex, 'hex'))
    let decrypted = decipher.update(encryptedData, 'hex', 'utf-8')
    decrypted += decipher.final('utf-8')
    return decrypted 
}

console.log('encrypted data: ');
const data = 'my credit card: 4242 4242 4242 4242';
console.log('original dat: ', data);

const encrypted = encrypt(data)
console.log('encrypted data: ', encrypted);

console.log('decrypted data: ');
const decrypted = decrypt(encrypted.encryptedData, encrypted.iv)

console.log('decrypted: ', decrypted);

console.log('match: ', data === decrypted);
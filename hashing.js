const crypto = require("crypto");

const password = "password123";

console.log("\n MD5 hash: ");

const md5hash = crypto.createHash("md5").update(password).digest("hex"); // not recommended
console.log("input: ", password);
console.log("output: ", md5hash);

//sha256hash
const sha256Hash = crypto.createHash('sha256').update(password).digest('hex')
console.log('input:', password);
console.log('sha256 Output: ', sha256Hash);

//sha512hash
const sha512Hash = crypto.createHash('sha512').update(password).digest('hex')
console.log('input:', password);
console.log('sha512 Output: ', sha512Hash);
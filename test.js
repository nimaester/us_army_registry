const faker = require("faker");

var randomName = faker.name.findName(); // Caitlyn Kerluke
var randomEmail = faker.internet.email(); // Rusty@arne.info
const phone = faker.phone.phoneFormats();
const phone2 = faker.phone.phoneNumberFormat();
const img = faker.image.avatar();

console.log(phone, phone2);
console.log(img);

var fs = require('fs');
const { faker } = require('@faker-js/faker'); // This is a library for generating fake data.

var data = { 
    users: []
};

var dataSize = 0;
var targetSize = 1 * 1024 * 1024; // 1 MB

while(dataSize < targetSize) {
    var randomUser = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        address: faker.location.streetAddress(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        amount: faker.finance.amount()
    };

    data.users.push(randomUser);

    dataSize = Buffer.from(JSON.stringify(data), 'utf8').length;
}

fs.writeFile('randomData.json', JSON.stringify(data), function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log('JSON saved to "randomData.json"');
    }
});

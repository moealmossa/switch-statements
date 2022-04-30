// strings 
console.log('Hello, world');

let email = 'mario@thenetninja.co.uk';
console.log(email);

// string concatentation
let firstName = 'Moe';
let lastName = 'Almossa';

let fullName = firstName + '' + lastName;
console.log(fullName);

// getting characters 
console.log(fullName[0]);

// string length 
console.log(fullName.length);

// string methods
console.log(fullName.toLocaleUpperCase());
let result = fullName.toLocaleLowerCase();
console.log(result, fullName);

let index = email.indexOf("@");
console.log(index);

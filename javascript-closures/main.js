/*
    Define a function named graduate with one parameter, credential
    graduate should return another function with its own parameter - fullName
    Call your graduate function with the string 'M.D.' and assign the return value to a variable named medicalSchool.
    Call your graduate function again with the string 'Esq.' and assign the return value to a variable named lawSchool.
    Call each of your medicalSchool and lawSchool functions and pass them your full name.
        medicalSchool('Dan Abramov') should return 'Dan Abramov, M.D.'
        lawSchool('Ryan Florence') should return 'Ryan Florence, Esq.'
*/

function graduate(credential) {
  return fullName => `${fullName}, ${credential}`;
}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

console.log(medicalSchool('D. Janzyc'));
console.log(lawSchool('Saul Goodman'));

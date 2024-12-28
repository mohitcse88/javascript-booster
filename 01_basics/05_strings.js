const name = "Mohit"
const repoCount = 10

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Mohit-dev-com")

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf("o"));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "                Mohit             "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://www.mohit.dev/web%20development"

console.log(url.replace("%20", "-"))
console.log(url);

console.log(url.includes("mohit"));
console.log(url.includes("kumar"));

console.log(gameName.split("-"));












var x = 9.65
console.log(x.toFixed(0));  // 10 
console.log(x.toFixed(2));  // 9.65 
console.log(x.toFixed(1));  // 9.7

console.log(Math.random());
console.log(Math.round(9.6)); // 10 
console.log(Math.ceil(4.4));  // 5 
console.log(Math.floor(4.7)); // 4
console.log(Math.pow(8,2));   // 64 
console.log(Math.sqrt(64));   //8

const alphabets = ['A','B', 'C', 'D', 'E', 'F', 'G', 'H'];
const numbers = [1,2,3,4,5,6,7,8,9];
const combined = [ ...alphabets, ...numbers ]

console.log(alphabets);
const [a, b ,...rest] = alphabets;
console.log(a); // A
console.log(b); // B
console.log(rest); // [ 'C', 'D', 'E', 'F', 'G', 'H' ]
console.log(combined);   // [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(combined); // same as alphabets.concat(numbers)


//different approch
const sumAndMultiply = (a,b) => {
    return [a+b, a*b]
}

const [sum, mul, division = "Not available division"] = sumAndMultiply(10,2);
console.log(sum); // 12
console.log(mul); // 20
console.log(division); //Not available division

const personOne = {
    name : "amar chinta",
    age: 25,
    address : {
        city : "solapur",
        nation : "Indian"
    }
}

const personTwo = {
    name : "Harbinger Group",
    address : {
        nation :"INDIAN",
        city : "Pune"
    }
}

const { address : { city }  } =  personOne

//Accessig nested objects 
console.log(city) // solapur

//Combining two objects ..
const combinedObject = { ...personOne, ...personTwo }
console.log(combinedObject);

//STRING OPERATIONS AND MATHODS

const stringOne = " this is first string sentence  learn"
const stringTwo = "second sentence of string "

console.log(stringOne.trim());
console.log(stringOne.length);
console.log(stringOne.toLowerCase());
console.log(stringOne.toUpperCase());
console.log(stringOne.split(" ")); // will return array of words of strinOne    
console.log(stringOne.charAt(1));
console.log(stringOne.charCodeAt(1));
console.log(stringOne.concat(stringTwo));
console.log(stringOne.endsWith("learn"));  // true
console.log(stringOne.includes("learn"));  // true
console.log(stringOne.indexOf("learn")); // 32
console.log(stringOne.match(/learn/g)); // [  "learn" ]
console.log(stringOne.replace(/learn/g,'TEACH'));
console.log(stringOne.search("learn")); // RETURNS POSITION OF LEARN 
console.log(stringOne.substr(2,4)); // is i





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

const [sum, mul] = sumAndMultiply(10,2);
console.log(sum);
console.log(mul);

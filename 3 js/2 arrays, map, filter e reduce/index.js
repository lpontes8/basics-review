//Arrays

const names = ["Felipe", "João", "Julia", 10, false];

const n = names[0];

console.log(n);

names.push('Pedro');// add no fim
console.log(names);

names.unshift('Fernanda');//add no início
console.log(names);

names.pop();
names.pop();
names.pop();
console.log(names);

names[3] = 'Gustavo';
console.log(names);

console.log(names.indexOf('Felipe'));

const sortedNames = names.sort();
console.log(sortedNames);
console.log(names.length);

const namesIsArray = Array.isArray(names);
console.log(namesIsArray);

//Map

const numbers = [1, 2 , 3, 4, 5];
const numberDouble = numbers.map((number) => {
    return number * 2;
});
console.log(numberDouble);

//Filter
const ages = [ 8, 13, 27, 22, 40 ];
const evenAges = ages.filter((age) => {
    return (age % 2 === 0);
})
console.log(evenAges);

//Reduce 
const sumOfAges = ages.reduce((age, accumulator) => {
        return accumulator + age;
}, 0);

console.log(sumOfAges);

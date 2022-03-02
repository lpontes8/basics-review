
//Functions and Arrow Functions

function soma(a, b = 10) {
    return(a + b);
}
const sumValue = soma(2);
console.log(sumValue);



const sumArrow = (a, b = 10) => {
    return (a + b);
}
const resultArrow = sumArrow(2);
console.log(resultArrow);




const sumArrowReduced = (a, b = 10) => ( a + b );
const resultArrowReduced = sumArrowReduced(2);
console.log(resultArrowReduced);


//POO


class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }

    static speak() {
        console.log('Hello!');
    }
}

const createdPerson = new Person('Lucas', 'Pontes', 26);
console.log(createdPerson);

createdPerson.getFullName();
Person.speak(); //método estático, não precisa instanciar para executar

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} made some noise`);
    }
}

class Dog extends Animal {
    constructor (name) {
        super(name);
    }

    speak() {
        console.log(`${this.name} barked`);
    }
}

const animal = new Animal("Simba");
animal.speak();

const dog = new Dog('Bob');
dog.speak();

//Objetos

const person = {
    firstName: 'Lucas',
    lastName: 'Pontes',
    age: '26',
    hobbies : ['soccer', 'code']
}

const personName = person.firstName;
const hobbies = person.hobbies;
const secondHobbie = person.hobbies[1];

console.log(personName);
console.log(hobbies);
console.log(secondHobbie);

const { age } = person;
console.log(age);

person.dog = {
    name: 'nina',
    age: 1
};
console.log(person.dog);


const { dog: { name: dogName } } = person;
console.log(dogName); 

const todos = [
    {
        id: 1,
        description: 'Estudar',
        isCompleted: false
    },
    {
        id: 2,
        description: 'Academia',
        isCompleted: true,
    }
];

const descriptionOfLastTodo = todos[1].description;

console.log(descriptionOfLastTodo);

// JSON

const todosJSON = JSON.stringify(todos);
console.log(todosJSON);

const todosList = JSON.parse(todosJSON);
console.log(todosList);
console.log(todosList[0].id);

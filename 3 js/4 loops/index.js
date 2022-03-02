//LOOPS

//FOR

for (let index = 0; index < 10; index++) {
    console.log(index);
}

const cars = ['Ferrari', 'Tesla', 'Toyota'];

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

for (let car of cars) {
    console.log(car);
}



const personFor = {
    name: "Jane",
    age: 21
}
//Não é muito performático
for (property in personFor) {
    console.log(personFor[property]);
}




// index é opcional
cars.forEach((car, index) => {
    console.log(index)
    console.log(car);
})

//While
let index = 0;
while (index < 10) {
    console.log("index é menor que 10");
    index++;
}

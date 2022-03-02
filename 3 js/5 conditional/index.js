//      CONDITIONAL

//IF

const sum = 100;
const sum2 = 50;
if (sum === 100) {
    console.log("sum is 100")
} else if (sum === 1) {
    console.log("sum is 1")
} else {
    console.log("sum is an other value")
}

if ( sum === 100 && sum2 === 10 ) {
    console.log("Passou no teste AND");
} else if ( sum === 100 || sum2 === 10 ) {
    console.log("Passou no teste OR");
}

let numConditional = sum === 2 ? 34 : 43;
console.log(numConditional);

//SWITCH

const carModel = 'Ferrari';

switch (carModel) {
    case "BMW":
        console.log('O carro é da BMW');
        break;
    case "Ferrari":
        console.log('O carro é da Ferrari');
        break;
    default:
        console.log('O carro é de uma montadora desconhecida');
}

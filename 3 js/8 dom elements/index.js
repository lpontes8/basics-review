//Selecionar um Elemento
const addUserText = document.getElementById('add-user');
console.log(addUserText);
addUserText.innerText = "Adicionar usuário";

const addUserText2 = document.querySelector("#add-user");
addUserText2.textContent = "Adicionar um usuário";

const myForm = document.querySelector(".container #my-form");
console.log(myForm);
const myItem= document.querySelector(".item"); // retorna apenas o primeiro item
console.log(myItem);

//Selecionar múltiplos elementos
const allItems = document.querySelectorAll('.items .item'); //mais recomendado por poder utilizar métodos de lista, mais indicado que os outros
const allItems2 = document.getElementsByClassName("items");
const allItems3 = document.getElementsByTagName("li");



//Manipulando o DOM

//const items = document.querySelector(".items");
//items.children[1].textContent= "Item alterado";
//items.firstElementChild.remove();
//items.lastElementChild.remove();
//items.lastElementChild.innerHTML="<h1>Hello</h1>";
 
const button = document.querySelector('.btn');
button.style.background = "red";


//Eventos

const buttonSubmit = document.querySelector('#submit-button');
const myForm2 = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');

const items4 = document.querySelector('.items');
const body = document.querySelector('body');

buttonSubmit.addEventListener('click', (e)=>{
    e.preventDefault();
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;

    if (nameValue === '' || emailValue === '') {
        return alert("Please fill out all the fields");        
    }

    myForm2.style.background = "red";
    items4.firstElementChild.textContent = nameValue;
    items4.children[1].textContent = emailValue;
    body.style.background = "white";

});


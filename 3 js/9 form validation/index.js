const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const submitButton = document.querySelector("#submit-button");

const errorMessage = document.querySelector(".msg");

const items = document.querySelector('.items');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    errorMessage.textContent = "";
    errorMessage.classList = "";

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;

    if (nameValue === '' || emailInput === '') {
        errorMessage.textContent = "Please fill out the fields!";
        errorMessage.classList = "error";

        return;
    } 

    const li = document.createElement("li");
    li.classList = "item";
    li.textContent = `Name: ${nameValue}, Email: ${emailValue}`;

    items.appendChild(li);

    nameInput.value = "";
    emailInput.value = "";
})

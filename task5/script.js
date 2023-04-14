let textField = document.querySelector('input');
let dublicateField = document.querySelector('#dublicateField');

textField.addEventListener('keyup', () => {
    dublicateField.textContent = textField.value;
});

document.querySelector('button').addEventListener('click', () => {
    console.log(textField.value);
    textField.value = "";
    dublicateField.textContent = "";
});


let userText = document.querySelector('.userText');

userText.addEventListener('click', (event) => {
    userText.textContent = prompt('Введите текст');
    event.preventDefault();
});

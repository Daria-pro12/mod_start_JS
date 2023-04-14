document.querySelector('#consoleLog').addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
});

document.querySelector('.example_console').addEventListener('click', function() {
    this.textContent = "console.log('Этот текст будет выведен в консоль');";
});

document.querySelector('#alert').addEventListener('click', () => {
    alert('Служит для отображения информации пользователям в диалоговом окне');
});

document.querySelector('.example_alert').addEventListener('click', function() {
    this.textContent = "alert('Этот текст будет выведен в диалоговом окне');";
});

document.querySelector('#prompt').addEventListener('click', () => {
    alert('Служит для отображения диалогового окна с запросом на ввод текста');
});

document.querySelector('.example_prompt').addEventListener('click', function() {
    this.textContent = "prompt('Запрос на ввод текста');";
});

 
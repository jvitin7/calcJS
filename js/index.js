import { calculate } from "./calculate.js";
import copyToClipboard from "./copyToClipboard.js";
import switchTheme from "./switchTheme.js";

const input = document.getElementById('input');
const resultInput = document.getElementById('result');

const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '(', ')', '+', '-', '*', '/', '=', '.', '%', ' '];

input.focus();

// Pegar apenas as teclas que foram habilitadas(allowedKeys)
input.addEventListener('keydown', function(event) {
    event.preventDefault();

    if(allowedKeys.includes(event.key)) {
        input.value += event.key;

        return
    }

    if(event.key === 'Backspace') {
        input.value = input.value.slice(0, -1);
    }

    if(event.key === 'Enter') {
        calculate();
    }
});

// Habilitando a função dos botões
document.querySelectorAll('.charKey').forEach(function(charKeyBtn) {
    charKeyBtn.addEventListener('click', function() {
        const value = charKeyBtn.dataset.value;
        input.value += value;
        input.focus();
    });
});

// Limpar a tela
document.getElementById('clear').addEventListener('click', function() {
    input.value = '';
    input.focus();

    resultInput.value = '';
    resultInput.classList.remove('error');
});

// Função para calcular o resultado utilizando eval(função nativa do javascript, que avalia uma string)
document.getElementById('equal').addEventListener('click', calculate);

// Copiar resultado para área de transferência
document.getElementById('copyToClipboard').addEventListener('click', copyToClipboard);

// Trocar o tema
document.getElementById('themeSwitcher').addEventListener('click', switchTheme);
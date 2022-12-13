const main = document.querySelector("main")
const root = document.querySelector(":root")
const input = document.getElementById('input')
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
document.getElementById('equal').addEventListener('click', calculate)

function calculate() {
    resultInput.value = 'ERROR';
    resultInput.classList.add('error');

    const result = eval(input.value);
    resultInput.value = result;
    resultInput.classList.remove('error');
}

// Trocar o tema
document.getElementById('themeSwitcher').addEventListener('click', function() {
    if(main.dataset.theme === 'dark') {
        root.style.setProperty('--bg-color', '#F1F5F9');
        root.style.setProperty('--border-color', '#AAA');
        root.style.setProperty('--font-color', '#212529');
        root.style.setProperty('--primary-color', '#23834A');
        
        main.dataset.theme = 'light';
    } else {
        root.style.setProperty('--bg-color', '#212529');
        root.style.setProperty('--border-color', '#666');
        root.style.setProperty('--font-color', '#f1f5f9');
        root.style.setProperty('--primary-color', '#4dff91');
        
        main.dataset.theme = 'dark';
    }
});


// Copiar resultado para área de transferência
document.getElementById('copyToClipboard').addEventListener('click', function(event) {
    const buttonCopy = event.currentTarget;

    if(buttonCopy.innerText === 'Copy') {  
        buttonCopy.innerText = 'Copied';
        buttonCopy.classList.add('success');

        navigator.clipboard.writeText(resultInput.value);
    } else {
        buttonCopy.innerText = 'Copy';
        buttonCopy.classList.remove('success');
    }
});
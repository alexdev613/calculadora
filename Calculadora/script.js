const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == 'clear') {
            display.innerText = '';
        } else if (item.id == 'backspace') {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        } else if (item.id == 'equal') {
            try {
                const result = eval(display.innerText);
                if (result === undefined) {
                    display.innerText = 'Valor inválido = undefined';
                    setTimeout(() => (display.innerText = ''), 2000);
                } else if (result === Infinity) {
                    display.innerText = 'Resultado tende a Infinito = Infinity';
                    setTimeout(() => (display.innerText = ''), 3000);
                } else {
                    display.innerText = result;
                }
            } catch (error) {
                display.innerText = 'Valor inválido';
                setTimeout(() => (display.innerText = ''), 2000);
            }
        } else {
            display.innerText += item.id;
        }
    };
});



// Mapeamento de teclas do teclado para valores
const keyMap = {
    "Backspace": "CE",
    "Escape": "C",
    "Enter": "=",
    "+": "+",
    "-": "-",
    "*": "*",
    "/": "/",
    ".": ".",
    "0": "0",
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "5",
    "6": "6",
    "7": "7",
    "8": "8",
    "9": "9",
    "(": "(",
    ")": ")",
};

// Evento de teclado
document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (key in keyMap) {
        event.preventDefault();
        const value = keyMap[key];
        if (value == "C") {
            display.innerText = "";
        } else if (value == "CE") {
            const str = display.innerText;
            display.innerText = str.substr(0, str.length - 1);
        } else if (value == "=") {
            try {
                const result = eval(display.innerText);
                display.innerText = result;
            } catch (error) {
                display.innerText = "Valor inválido";
                setTimeout(() => (display.innerText = ""), 2000);
            }
        } else {
            display.innerText += value;
        }
    }
});


const themeToggleButton = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
const toggleIcon = document.querySelector('.toggler-icon');
let isDark = true;

themeToggleButton.onclick = () => {
    calculator.classList.toggle('dark');
    themeToggleButton.classList.toggle('active');
    isDark = !isDark;
}
const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button'); // Use 'button' as the selector

buttons.forEach((item) => {
    item.addEventListener('click', () => { // Use addEventListener and 'click'
        if (item.id === 'clear') {
            display.innerText = '';
        } else if (item.id === 'backspace') {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        } else if (display.innerText !== '' && item.id === 'equal') { // Use !== instead of !=
            display.innerText = eval(display.innerText);
        } else if (display.innerText === '' && item.id === 'equal') { // Use === instead of ==
            display.innerText = 'Empty';
            setTimeout(() => (display.innerText = ''), 2000); // Correct the timeout value
        } else {
            display.innerText += item.id;
        }
    });
});

const themeToggleBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
const toggleIcon = document.querySelector('.toggle-icon');
let isDark = true;
themeToggleBtn.addEventListener('click', () => { // Use addEventListener and 'click'
    calculator.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');
    isDark = !isDark;
});

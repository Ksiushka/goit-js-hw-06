const input = document.querySelector('#validation-input');
const inputLength = input.dataset.length;
console.log(inputLength)

input.addEventListener('focus', onInputFocus);
input.addEventListener('blur', onInputBlur);

 
function onInputFocus() {
    console.log('событие focus')
}

function onInputBlur(event) {
    if (event.currentTarget.value.trim().length === Number(inputLength)) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    }
    else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
    
 }
console.log(input)
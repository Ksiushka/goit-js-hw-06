const input = document.querySelector('#name-input');
const nameUser = document.querySelector('#name-output');

input.addEventListener('input', onInputChange);
function onInputChange(event) {
    console.log(event.currentTarget.value);
    nameUser.textContent = event.currentTarget.value;
    if (event.currentTarget.value.trim() === '') {
        nameUser.textContent = 'Anonymous';
    }
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector('#controls input');
const btnCreateRef = document.querySelector('[data-create]');
const btnDestroyRef = document.querySelector('[data-destroy]');
const boxesRef = document.querySelector('#boxes');

btnCreateRef.addEventListener('click', () => {
  const amount = Number(inputRef.value);
  let markup = '';
  let size = 30;
  for (let i = 1; i <= amount; i++) {
    markup += `<div width='${size}' height='${size}' style = 'background-color:${getRandomHexColor()}; width: ${size}px; height: ${size}px; '></div>`
    size += 10; 
  }
  boxesRef.insertAdjacentHTML("afterbegin", markup);
})

btnDestroyRef.addEventListener('click', () => {
  boxesRef.replaceChildren();
  // boxesRef.textContent = '';
})
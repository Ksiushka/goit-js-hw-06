// const counter = document.querySelector('#value');
//  const btnIncr = document.querySelector('[data-action="increment"]');
//  const btnDecr = document.querySelector('[data-action="decrement"]');
// // console.log(counter)
// btnIncr.addEventListener('click', () => {
//     console.log('+1');
//     counter.addEventListener('click', onCounterClick);
// });
// btnDecr.addEventListener('click', () => {
//     console.log('-1');
//     counter.removeEventListener('click', onCounterClick);
// });

function onCounterClick() {
    console.log('counter');
};

const count = document.querySelector('#value');
const btnIncr = document.querySelector('[data-action="increment"]');
const btnDecr = document.querySelector('[data-action="decrement"]');
btnIncr.addEventListener('click', add);
btnDecr.addEventListener('click', remove);
let counterValue = 0;
function add() {
  counterValue += 1;
  count.textContent = counterValue;
}
function remove() {
  counterValue -= 1;
  count.textContent = counterValue;
}

console.log(counterValue)


// как догадаться про textContent; шота репетына методика не приближала меня к победе
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const navEl = document.querySelector('#ingredients');

const listIngredients = ingredients.map(ingredient => {
  let item = document.createElement('li');
  item.className = 'item';
  item.textContent = ingredient;
  return item;
}
);

navEl.append(...listIngredients);
console.log(navEl)


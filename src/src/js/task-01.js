const listWithId = document.querySelector('#categories');
console.log('Number of categories:', listWithId.children.length);

const listWithClass = document.querySelectorAll('.item');

console.log(listWithClass)

listWithClass.forEach(function (category) { 
  console.log(category);
  console.log(`Category: ${category.querySelector('h2').textContent}`); 
  console.log("Elements: ", category.querySelectorAll('li').length); 
});
// const firstCateg = listWithId.firstElementCild;
// console.log( firstCateg);

// listWithClass.forEach(function (number, index) {
//   console.log(`Category: ${index}, Elements: ${number}`);
// });
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
const ingredientsList = ingredients.map((vegetables) => {
  const li = document.createElement('li');
  li.textContent = vegetables;
  li.classList.add('item');
  console.log(li);
  return li;
});

list.append(...ingredientsList);



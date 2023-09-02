const countMinus = document.querySelector('button[data-action="decrement"]');
const countPlus = document.querySelector('button[data-action="increment"]');
const countValue = document.getElementById("value");

let counterValue = 0;
countMinus.addEventListener("click", function () {
    counterValue -= 1;
    countValue.textContent = counterValue;
});

countPlus.addEventListener("click", function () {
    counterValue += 1;
    countValue.textContent = counterValue;
});
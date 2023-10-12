console.log('This is a counter');
// Accessing elements ==== Num Counter =====
const countNum = document.getElementById("count");
const countInput = document.getElementById("countInput");
const plusButton = document.getElementById("increase");
const minusButton = document.getElementById("decrease");
let count = 0;

function newSum() {
    countNum.textContent = count;
    if (count < 0){
        countNum.style.color = 'red';
        // adding this helped removed the concatination issue
    } else {
        countNum.style.color = '';
    }
}
// even listeners 
plusButton.addEventListener("click", function () {
    const incrementValue = parseInt(countInput.value, 10); // getting rid of leading zero
    count += incrementValue;
    newSum();
});
// Event listener for the decrement button
minusButton.addEventListener("click", function () {
    const decrementValue = parseInt(countInput.value, 10); // getting rid of leading zero
    count -= decrementValue;
    newSum();
});
newSum();

// Accessing elements ==== Letter Counter =====
// const countNum = document.getElementById("count");
// const countInput = document.getElementById("countInput");
// const plusButton = document.getElementById("increase");
// const minusButton = document.getElementById("decrease");
// let count = 0;


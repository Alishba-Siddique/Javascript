let saveEl = document.getElementById("save-el");
let count = 0;
let countEl = document.getElementById('count-el');


function plus() {
  count = count + 1;
  countEl.textContent = count;
}

function save() {
  let countDash = count + " - ";
  saveEl.textContent += countDash;
  console.log(count);
}

function reset() {
  count = 0;
  countEl.textContent = count;
}


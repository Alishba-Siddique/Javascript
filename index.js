
let countHome = 0;

function plusOneHome() {
    countHome = countHome +1;
    document.getElementById('zero-h').textContent = countHome;
}

function plusTwoHome() {
    countHome = countHome + 2;
    document.getElementById('zero-h').textContent = countHome;
}

function plusThreeHome() {
    countHome = countHome + 3;
    document.getElementById('zero-h').textContent = countHome;
}

let countGuest = 0;

function plusOneGuest() {
    countGuest = countGuest + 1;
    document.getElementById('zero-g').textContent = countGuest++;
}

function plusTwoGuest() {
    countGuest =  countGuest + 2;
    document.getElementById('zero-g').textContent = countGuest;
}

function plusThreeGuest() {
    countGuest = countGuest + 3;
    document.getElementById('zero-g').textContent = countGuest;
}

function reset() {
    document.getElementById('zero-g').textContent = 0;
    document.getElementById('zero-h').textContent = 0;

}


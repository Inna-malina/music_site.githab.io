let menu = document.querySelector('.menu');
let boxTwo = document.querySelector('.drop-down');
let exit = document.querySelector('.exit');

menu.onclick = function () {
    boxTwo.classList.add('drop-down-2');
    exit.classList.add('exit2');
}

exit.onclick = function () {
    boxTwo.classList.remove('drop-down-2');
    exit.classList.remove('exit2');
}
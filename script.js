


function t1() {
    if (play1 === false) {
        play1 = true;
        this.innerHTML = 'stop';
        music1.play();
        document.querySelector('.opasity1').classList.add('opasity11');
        document.querySelector('.play-1').classList.add('play-11');
    }

    else {
        play1 = false;
        this.innerHTML = 'play';
        music1.pause();
        document.querySelector('.opasity1').classList.remove('opasity11');
        document.querySelector('.play-1').classList.remove('play-11');
    }
}

function t2() {
    if (play2 === false) {
        play2 = true;
        this.innerHTML = 'stop';
        music2.play();
        document.querySelector('.opasity2').classList.add('opasity22');
        document.querySelector('.play-2').classList.add('play-22');
    }

    else {
        play2 = false;
        this.innerHTML = 'play';
        music2.pause();
        document.querySelector('.opasity2').classList.remove('opasity22');
        document.querySelector('.play-2').classList.remove('play-22');
    }
}

function t3() {
    if (play3 === false) {
        play3 = true;
        this.innerHTML = 'stop';
        music3.play();
        document.querySelector('.opasity3').classList.add('opasity33');
        document.querySelector('.play-3').classList.add('play-33');
    }

    else {
        play3 = false;
        this.innerHTML = 'play';
        music3.pause();
        document.querySelector('.opasity3').classList.remove('opasity33');
        document.querySelector('.play-3').classList.remove('play-33');
    }
}

function t4() {
    if (play4 === false) {
        play4 = true;
        this.innerHTML = 'stop';
        music4.play();
        document.querySelector('.opasity4').classList.add('opasity44');
        document.querySelector('.play-4').classList.add('play-44');
    }

    else {
        play4 = false;
        this.innerHTML = 'play';
        music4.pause();
        document.querySelector('.opasity4').classList.remove('opasity44');
        document.querySelector('.play-4').classList.remove('play-44');
    }
}

function t5() {
    if (play5 === false) {
        play5 = true;
        this.innerHTML = 'stop';
        music5.play();
        document.querySelector('.opasity5').classList.add('opasity55');
        document.querySelector('.play-5').classList.add('play-55');
    }

    else {
        play5 = false;
        this.innerHTML = 'play';
        music5.pause();
        document.querySelector('.opasity5').classList.remove('opasity55');
        document.querySelector('.play-5').classList.remove('play-55');
    }
}

function t6() {
    if (play6 === false) {
        play6 = true;
        this.innerHTML = 'stop';
        music6.play();
        document.querySelector('.opasity6').classList.add('opasity66');
        document.querySelector('.play-6').classList.add('play-66');
    }

    else {
        play6 = false;
        this.innerHTML = 'play';
        music6.pause();
        document.querySelector('.opasity6').classList.remove('opasity66');
        document.querySelector('.play-6').classList.remove('play-66');
    }
}


let play1 = false;
let play2 = false;
let play3 = false;
let play4 = false;
let play5 = false;
let play6 = false;


const music1 = new Audio('./music/music1.mp3');
const music2 = new Audio('./music/music2.mp3');
const music3 = new Audio('./music/music3.mp3');
const music4 = new Audio('./music/music4.mp3');
const music5 = new Audio('./music/music5.mp3');
const music6 = new Audio('./music/music6.mp3');

document.querySelector('.play-1').addEventListener('click', t1);
document.querySelector('.play-2').addEventListener('click', t2);
document.querySelector('.play-3').addEventListener('click', t3);
document.querySelector('.play-4').addEventListener('click', t4);
document.querySelector('.play-5').addEventListener('click', t5);
document.querySelector('.play-6').addEventListener('click', t6);




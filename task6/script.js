const trafficLightEl = document.querySelector('#trafficLight');
const trafficLightEl1 = document.querySelector('#trafficLight1');
const trafficLightEl2 = document.querySelector('#trafficLight2');

function makeGreen() {
    trafficLightEl.style.background = ('green');
    trafficLightEl1.style.background = ('');
    trafficLightEl2.style.background = ('');
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl1.removeEventListener('click', makeGreen);
    trafficLightEl2.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);
    trafficLightEl1.addEventListener('click', makeYellow);
    trafficLightEl2.addEventListener('click', makeYellow); 
};

trafficLightEl.addEventListener('click', makeGreen);

function makeYellow() {
    trafficLightEl1.style.background = ('yellow');
    trafficLightEl.style.background = ('');
    trafficLightEl2.style.background = ('');
    trafficLightEl.removeEventListener('click', makeYellow);
    trafficLightEl1.removeEventListener('click', makeYellow);
    trafficLightEl2.removeEventListener('click', makeYellow);
    trafficLightEl.addEventListener('click', makeRed);
    trafficLightEl1.addEventListener('click', makeRed);
    trafficLightEl2.addEventListener('click', makeRed); 
};

trafficLightEl1.addEventListener('click', makeYellow);

function makeRed() {
    trafficLightEl2.style.background = ('red');
    trafficLightEl.style.background = ('');
    trafficLightEl1.style.background = ('');
    trafficLightEl.removeEventListener('click', makeRed);
    trafficLightEl1.removeEventListener('click', makeRed);
    trafficLightEl2.removeEventListener('click', makeRed);
    trafficLightEl.addEventListener('click', makeGreen);
    trafficLightEl1.addEventListener('click', makeGreen);
    trafficLightEl2.addEventListener('click', makeGreen); 
};

trafficLightEl2.addEventListener('click', makeRed);


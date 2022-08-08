// grab DOM elements
const climateDropdown = document.getElementById('climate-dropdown');
const locationDropdown = document.getElementById('location-dropdown');
const typeDropdown = document.getElementById('type-dropdown');

const topImgTag = document.getElementById('top-img');
const middleImgTag = document.getElementById('middle-img');
const bottomImgTag = document.getElementById('bottom-img');

const slogansEl = document.getElementById('slogans');
const slogansInput = document.getElementById('slogan-input');
const slogansButton = document.getElementById('slogan-button');

const reportEl = document.getElementById('report');

const cityNameEl = document.getElementById('name');
const cityNameInput = document.getElementById('city-input');
const cityNameButton = document.getElementById('city-button');

// let state
let changeHead = 0;
let changeMiddle = 0;
let changeBottom = 0;
let changeSlogan = 0;
let slogans = [];

// set event listeners 

climateDropdown.addEventListener('change', () => {
    changeHead++;
    topImgTag.src = `./assets/${climateDropdown.value}-head.jpg`;

    displayCountStats();
});

locationDropdown.addEventListener('change', () => {
    changeMiddle++;
    middleImgTag.src = `./assets/${locationDropdown.value}-mid.jpg`;
    displayCountStats();
});

typeDropdown.addEventListener('change', () => {
    changeBottom++;
    bottomImgTag.src = `./assets/${typeDropdown.value}-bot.jpg`;     
    displayCountStats();
});

slogansButton.addEventListener('click', () => {
    changeSlogan++;  
    const newSlogan = slogansInput.value;
    slogans.push(newSlogan);
    slogansInput.value = '';
    displaySlogans();
    displayCountStats();
});

cityNameButton.addEventListener('click', () => {
    const newCityName = cityNameInput.value;
    cityNameEl.textContent = 'Welcome to ' + newCityName + '!';
    cityNameInput.value = '';

});

function displaySlogans() {
    slogansEl.textContent = '';
    for (let slogan of slogans) {
        const newSlogan = document.createElement('p');       
        newSlogan.textContent = slogan; 
        slogansEl.classList.add('slogan');
        slogansEl.append(newSlogan);
    }
}

function displayCountStats() {
    reportEl.textContent = `You changed the climate ${changeHead} times, the location ${changeMiddle} times, and the city type ${changeBottom} times. And wow, you changed the slogan ${changeSlogan} times.`;
}

displaySlogans();
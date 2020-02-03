//Function for clock
function clock() {
    let clcokTime = document.getElementById('clock');
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    clcokTime.innerHTML = hour + ':' + minutes + ':' + seconds;
    let t = setTimeout(clock, 1000);
}

//Date 
let time = document.getElementById('time');
let date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

if(day < 10) {
    day = '0' + day;
}

if(month < 10) {
    month = '0' + month;
}
time.innerHTML = day + '.' + ' ' + month + '.' + ' ' + year + '.';

//Active buttons in sidebar
const btns = document.getElementsByClassName('btn');

for(let i=0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
    });
}

//Open page with companies
function openCompanies() {
    content.innerHTML = '';

    createContent();

    companies()
        .then(createHeader.bind(null, headerCompanies))
        .then(createContentCompanies.bind(null));
}

//Open page with crypto currencies
function openCryptoCurrencies() {
    content.innerHTML = '';

    createContent();

    cryptoCurrencies()
        .then(createHeader.bind(null, headerCryptoCurrencies))
        .then(createContentCryptoCurrrencies);
}

//Open page with currencies
function openCurrencies() {
    content.innerHTML = '';

    createContent();

    currencies()
        .then(createHeader.bind(null, headerCurrencies))
        .then(createContentCurrencies);
    
    createFormConverter();
}

//Sort companies per price
function sortPerPrice() {
    content.innerHTML = '';

    createHeader(headerCompanies);
    createContentCompanies(sortedCompanies('price'));
}

//Sort companies per changes
function sortPerChanges() {
    content.innerHTML = '';

    createHeader(headerCompanies);
    createContentCompanies(sortedCompanies('changes'));
}



//Sort companies per changes percentage
function sortPerChangesPercentage() {
    table.innerHTML = '';

    createHeader(headerCompanies);
    createContentCompanies(sortedCompanies('changesPercentage'));
}
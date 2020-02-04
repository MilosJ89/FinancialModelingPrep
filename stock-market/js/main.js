/**
 * Main 
 * 
 * Functions for selection pages and load time in home page
 * 
 * @author Milos Jovanovic
 */

/**
 * Change active buttons by open page
 */
const btns = document.getElementsByClassName('btn');

for(let i=0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
    });
}

/**
 * Date in header
 */
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

/**
 * Create time in header
 */
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

/**
 * Open page with companies when click on tab companies in sidebar
 */
function openCompanies() {
    content.innerHTML = '';

    createTable();

    companies()
        .then(createHeader.bind(null, headerCompanies))
        .then(createContentCompanies.bind(null));
}

/**
 * Open page with crypto currencies when click on tab crypto currencies in sidebar
 */
function openCryptoCurrencies() {
    content.innerHTML = '';

    createTable();

    cryptoCurrencies()
        .then(createHeader.bind(null, headerCryptoCurrencies))
        .then(createContentCryptoCurrrencies);
}

/**
 * Open page with currencies when click on tab currencies in sidebar
 */
function openCurrencies() {
    content.innerHTML = '';

    createTable();

    currencies()
        .then(createHeader.bind(null, headerCurrencies))
        .then(createContentCurrencies);
    
    createFormConverter();
}

/**
 * Sort companies in table by changes
 */
function sortPerChanges() {
    content.innerHTML = '';

    createTable();

    createHeader(headerCompanies);
    createContentCompanies(sortedCompanies('changes'));
}

/**
 * Sort companies in table by changes percentage
 */
function sortPerChangesPercentage() {
    content.innerHTML = '';

    createTable();

    createHeader(headerCompanies);
    createContentCompanies(sortedCompanies('changesPercentage'));
}

/**
 * Sort companies in table by price 
 */
function sortPerPrice() {
    content.innerHTML = '';

    createTable();

    createHeader(headerCompanies);
    createContentCompanies(sortedCompanies('price'));
}
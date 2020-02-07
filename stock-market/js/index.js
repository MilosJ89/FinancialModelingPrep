/**
 * Main 
 * 
 * Functions for selection pages and load time in home page
 * 
 * @author Milos Jovanovic
 */

// import { createHeader, createTable } from './components/table';
// import { companies, createContentCompanies } from './pages/companies';
// import { createContentCurrencies, currencies } from './pages/currencies';


import * as table from './components/table';
import * as companies from './pages/companies';
import * as currencies from './pages/currencies';
import * as cryptoCurrencies from './pages/cryptoCurrencies';
import * as home from './pages/home';
import * as majorIndex from './components/majorIndex';

document.body.addEventListener('load', clock());
document.body.addEventListener('load', majorIndex.createMajorIndexes);
document.getElementById('openHome').addEventListener('click', home.openHome);
document.getElementById('openCompanies').addEventListener('click', openCompanies.bind(null));
document.getElementById('openCryptoCurrencies').addEventListener('click', openCryptoCurrencies.bind(null));
document.getElementById('openCurrencies').addEventListener('click', openCurrencies.bind(null));
document.getElementById('logo').addEventListener('click', home.openHome);

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

    table.createTable();

    companies.companies()
        .then(table.createHeader.bind(null, companies.headerCompanies))
        .then(companies.createContentCompanies.bind(null));
}

/**
 * Open page with crypto currencies when click on tab crypto currencies in sidebar
 */
function openCryptoCurrencies() {
    content.innerHTML = '';

    table.createTable();

    cryptoCurrencies.cryptoCurrencies()
        .then(table.createHeader.bind(null, cryptoCurrencies.headerCryptoCurrencies))
        .then(cryptoCurrencies.createContentCryptoCurrrencies);
}

/**
 * Open page with currencies when click on tab currencies in sidebar
 */
function openCurrencies() {
    content.innerHTML = '';

    table.createTable();

    currencies.currencies()
        .then(table.createHeader.bind(null, currencies.headerCurrencies))
        .then(currencies.createContentCurrencies);
    
    currencies.createFormConverter();
}
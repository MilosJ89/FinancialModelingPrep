/**
 * Currencies page
 * 
 * Functions for create table of currencies and converter
 * 
 * @author Milos Jovanovic
 */

/**
 * Array with tags of currencies
 * 
 * @type {string[]}
 */
const arrayCurrencies = ['EUR', 'USD', 'JPY', 'GBP', 'CHF', 'CAD', 'AUD', 'RUB', 'CNY', 'SEK', 'AED', 'INR', 'EGP', 'NOK'];

/**
 * Object with names of currencies by tags of currencies
 * 
 * @type {object}
 */
const countries = {
    EUR: 'Euro',
    USD: 'United States Dollar',
    JPY: 'Japanese Yen',
    GBP: 'Pound Sterling',
    CHF: 'Swiss Franc',
    CAD: 'Canadian Dollar',
    AUD: 'Australian Dollar',
    RUB: 'Rusian Ruble',
    CNY: 'Chinese Yuan',
    SEK: 'Swedish Krona',
    AED: 'UAE Dirham',
    INR: 'Indian Rupee',
    EGP: 'Egyptina Pound',
    NOK: 'Norwegian Krone'
}

/**
 * Array with objects of currencies information
 * 
 * @type {object[]}
 */
let forexEur = [];

/**
 * Array of header currencies with fields and titles
 * 
 * @type {object[]}
 */
export const headerCurrencies = [
    { field: 'country', title: 'Country'},
    { field: 'currency', title: 'Currency' },
    { field: 'rates', title: 'Exchange' },
]

/**
 * Create content table of currencies
 */
export function createContentCurrencies() {
    for(let currency in arrayCurrencies) {
        let item = `<div id='item' class='items'></div>`;
        document.getElementById('contentTable').innerHTML += item;

            for(let field of headerCurrencies) {
                let cell = `<div class='${field.field} cell'></div>`;
                document.getElementsByClassName('items')[currency].innerHTML += cell;

                if(field.field === 'country') {
                    let img = `<img id='${arrayCurrencies[currency]}' onmouseover='${currencyInfo.bind(null, arrayCurrencies[currency])}' src='${'../../img/countries/'}${arrayCurrencies[currency]}.png'></img>`;
                    document.getElementsByClassName(field.field)[currency].innerHTML += img;
                    
                    let flagInfo = `<div id='${arrayCurrencies[currency]}1' class='flagInfo'></div>`;
                    document.getElementsByClassName(field.field)[currency].innerHTML += flagInfo;
                }

                if(field.field === 'currency') {
                    document.getElementsByClassName(field.field)[currency].innerHTML += arrayCurrencies[currency];   
                }

                if(field.field === 'rates') {
                    document.getElementsByClassName(field.field)[currency].innerHTML += forexEur.rates[arrayCurrencies[currency]].toFixed(2);
                }

            }
    }
}

function createOptionElement(value) {
    return `<option>${value}</option>`;
}

/**
 * Create converter for convert one currency to another currency
 */
export function createFormConverter () {
    let hello = `
        <div id='form' class='form'>
            <label>Amount:</label>
            <input type='number' id='amount'></input>
            <label>From:</label>
            <select id='selectFrom'>
                ${arrayCurrencies.map(createOptionElement)}
            </select>
            <label>To:</label>
            <select id='selectTo'>
                ${arrayCurrencies.map(createOptionElement)}
            </select>
            <button id='convert'>Convert</button>
            <p id='resultConvert'></p>
        </div>
    `;

    document.getElementById('content').innerHTML += hello;

    document.getElementById('convert').addEventListener('click', convertCurrencies);
}

/**
 * Function for convert one currency to another currency
 */
async function convertCurrencies() {
    let from = document.getElementById('selectFrom');
    let to = document.getElementById('selectTo');
    let amount = document.getElementById('amount');
    let resultConvert = document.getElementById('resultConvert');

    let baseUrl = 'https://api.exchangerate-api.com/v4/latest/';
    let currencyFrom = await fetch(baseUrl + from.value);
    currencyFrom = await currencyFrom.json();
    resultConvert.innerHTML = (currencyFrom.rates[to.value] * amount.value).toFixed(2) + ' ' + to.value;
}

/**
 * Create array with currencies information for currency euro
 */
export async function currencies() {
    let baseUrl = 'https://api.exchangerate-api.com/v4/latest/'
    forexEur = await fetch(baseUrl + 'eur');
    forexEur = await forexEur.json();
}


/**
 * Visibility information name of curencies when mouseover across flag in table
 * 
 * @param {string} currency 
 */
function currencyInfo(currency) {
    let flagInfo = document.getElementById(`${currency}1`);
        flagInfo.style.padding = '5px';
        flagInfo.style.display = 'block';

    for(let field of headerCurrencies) {
        if(field.field === 'country') {
            flagInfo.innerHTML = countries[currency];
        }
    }
}

/**
 * Visibility hidden information name of currencies when mouseout acrros flag in table
 * 
 * @param {string} currency 
 */
function currencyInfoOut(currency) {
    let flagInfo = document.getElementById(currency);

    flagInfo.style.display = 'none';
}
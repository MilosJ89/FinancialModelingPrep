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
const headerCurrencies = [
    { field: 'country', title: 'Country'},
    { field: 'currency', title: 'Currency' },
    { field: 'rates', title: 'Exchange' },
]

/**
 * Create content table of currencies
 */
function createContentCurrencies() {
    for(let currency of arrayCurrencies) {
        let row = document.createElement('tr');
        table.appendChild(row);

            for(let field of headerCurrencies) {
                let tdTable = document.createElement('td');
                row.appendChild(tdTable);

                if(field.field === 'country') {
                    let country = document.createElement('div');
                    country.setAttribute('id', 'country');
                    tdTable.appendChild(country);

                        let flag = document.createElement('img');
                        flag.setAttribute('src', '../../img/cuntries/' + currency + '.png');
                        flag.onmouseover = currencyInfo.bind(null, currency);
                        flag.onmouseout = currencyInfoOut.bind(null, currency);
                        country.appendChild(flag);

                        let flagInfo = document.createElement('div');
                        flagInfo.setAttribute('id', currency);
                        flagInfo.setAttribute('class', 'flagInfo');
                        country.appendChild(flagInfo);
                }

                if(field.field === 'currency') {
                    tdTable.innerHTML = currency;
                }

                if(field.field === 'rates') {
                    tdTable.innerHTML = forexEur.rates[currency];
                }
            }
    }
}

/**
 * Create converter for convert one currency to another currency
 */
function createFormConverter () {
    let form = document.createElement('div');
    form.setAttribute('class', 'form');
    content.appendChild(form);

        let labelAmount = document.createElement('label');
        labelAmount.innerHTML = 'Amount:';
        form.appendChild(labelAmount);

        let inputAmount = document.createElement('input');
        inputAmount.setAttribute('type', 'number');
        inputAmount.setAttribute('id', 'amount');
        form.appendChild(inputAmount);

        let labelFrom = document.createElement('label');
        labelFrom.innerHTML = 'From:';
        form.appendChild(labelFrom);

        let selectFrom = document.createElement('select');
        selectFrom.setAttribute('id', 'selectFrom');
        form.appendChild(selectFrom);

            for(let currency of arrayCurrencies) {
                let optionFrom = document.createElement('option');
                optionFrom.innerHTML = currency;
                selectFrom.appendChild(optionFrom);
            } 

        let labelTo = document.createElement('label');
        labelTo.innerHTML = 'To:';
        form.appendChild(labelTo);

        let selectTo = document.createElement('select');
        selectTo.setAttribute('id', 'selectTo');
        form.appendChild(selectTo);

            for(let currency of arrayCurrencies) {
                let optionTo = document.createElement('option');
                optionTo.innerHTML = currency;
                selectTo.appendChild(optionTo);
            }

        let btnConvert = document.createElement('button');
        btnConvert.innerHTML = 'Convert';
        btnConvert.setAttribute('onclick', 'convertCurrencies()');
        form.appendChild(btnConvert);

        let result = document.createElement('p');
        result.setAttribute('id', 'resultConvert');
        form.appendChild(result);
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
async function currencies() {
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
    let flagInfo = document.getElementById(currency);
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
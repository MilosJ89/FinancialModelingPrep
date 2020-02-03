//Field and title for header of currencies
const headerCurrencies = [
    { field: 'country', title: 'Country'},
    { field: 'currency', title: 'Currency' },
    { field: 'rates', title: 'Exchange' },
]

//import abc from '../../img/cuntries/USD.png'

let forexEur;
const arrayCurrencies = ['EUR', 'USD', 'JPY', 'GBP', 'CHF', 'CAD', 'AUD', 'RUB', 'CNY', 'SEK', 'AED', 'INR', 'EGP', 'NOK'];

//Create array with currencies information for eur
async function currencies() {
    let baseUrl = 'https://api.exchangerate-api.com/v4/latest/'
    forexEur = await fetch(baseUrl + 'eur');
    forexEur = await forexEur.json();
    console.log(forexEur);
}

//Create content of table
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
                        country.appendChild(flag);
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

//Create converter
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

//Function for convert currency to currency
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

//Function for countries
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

function currencyInfo(currency) {
    let flag = document.getElementById('country');
        
    let flagInfo = document.createElement('p');
        flagInfo.setAttribute('class', 'flagInfo');
        flag.appendChild(flagInfo);

    for(let field of headerCurrencies) {
        if(field.field === 'country') {
            flagInfo.innerHTML = countries[currency];
        }
    }
}
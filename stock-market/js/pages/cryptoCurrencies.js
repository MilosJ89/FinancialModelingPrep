/**
 * Crypto currency page
 * 
 * Function for create content table of crypto currencies
 * 
 * @author Milos Jovanovic
 */

// import {sortCryptoCurrenciesPerPrice, sortCryptoCurrenciesPerChanges} from '../utility';
import {sort} from '../utility';

/**
 * @type {object[]}
 * 
 * Get crypto currencies from api
 */
const arrayCryptoCurrencies = [];


/**
 * @type {object[]}
 * 
 * Array of header crypto currencies with fields and titles
 */
export const headerCryptoCurrencies = [
    { field: 'ticker', title: 'Ticker'},
    { field: 'name', title: 'Name', class: 'bold' },
    { field: 'price', title: 'Price', clickHandler: sort.bind(null, 'cryptoCurrencies', 'price') },
    { field: 'changes', title: 'Changes', clickHandler: sort.bind(null, 'cryptoCurrencies', 'changes') }
]

/**
 * Function for create content table of crypto currencies
 */
export function createContentCryptoCurrrencies() {
    document.getElementById('contentTable').setAttribute('class', 'tableId');

    for(let crypto in arrayCryptoCurrencies) {
        let item = `<div id='item' class='items'></div>`;
        document.getElementById('contentTable').innerHTML += item;

        for(let field of headerCryptoCurrencies) {
            let cell = `<div class='${field.field} cell'>${arrayCryptoCurrencies[crypto][field.field]}</div>`;
            document.getElementsByClassName('items')[crypto].innerHTML += cell;

            if(field.hasOwnProperty('class')) {
                document.getElementsByClassName(field.field)[crypto].classList.add(field.class);
            }

            if(field.field === 'price') {
                document.getElementsByClassName(field.field)[crypto].innerHTML = `${(arrayCryptoCurrencies[crypto][field.field]).toFixed(2)} $`;
            }

            if(field.field === 'changes') {
                document.getElementsByClassName(field.field)[crypto].innerHTML = `${arrayCryptoCurrencies[crypto][field.field]} $`
                document.getElementsByClassName(field.field)[crypto].classList.add(`${arrayCryptoCurrencies[crypto].changes > 0 ? 'green' : arrayCryptoCurrencies[crypto].changes === 0 ? 'neutral' : 'red'}`);
            }
        }
    }
}

/**
 * Create array of crypto currencies by api
 */
export async function cryptoCurrencies() {
    let result = await fetch('https://financialmodelingprep.com/api/v3/cryptocurrencies');
    result = await result.json();

    for(let crypto of result.cryptocurrenciesList){
        arrayCryptoCurrencies.push(crypto);
    }
}

/**
 * Sorted crypto currencies by fields
 * Return array with sorted crypto currencies
 *  
 * @param {string} field
 * 
 * @returns {object[]}
 */
export function sortedCryptoCurrencies(field) {
    
    const sortCryptoCurrencies = arrayCryptoCurrencies.sort(function(c1, c2) {
        if(c1[field] < c2[field]) {
            return 1;
        } else {
            return -1;
        }
    })
    return sortCryptoCurrencies;
}
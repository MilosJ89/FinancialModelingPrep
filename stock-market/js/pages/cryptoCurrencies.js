/**
 * Crypto currency page
 * 
 * Function for create content table of crypto currencies
 * 
 * @author Milos Jovanovic
 */

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
const headerCryptoCurrencies = [
    { field: 'ticker', title: 'Ticker'},
    { field: 'name', title: 'Name' },
    { field: 'price', title: 'Crypto Price' },
    { field: 'changes', title: 'Crypto Changes'}
]

/**
 * Function for create content table of crypto currencies
 */
function createContentCryptoCurrrencies() {
    for(let crypto of arrayCryptoCurrencies) {
        let row = document.createElement('tr');
        table.appendChild(row);

        for(let field of headerCryptoCurrencies) {
            let tdTable = document.createElement('td');
            tdTable.innerHTML = crypto[field.field];

            if(field.field === 'name') {
                tdTable.setAttribute('class', 'bold');
            }

            if(field.field === 'price') {
                tdTable.innerHTML = (crypto[field.field]).toFixed(2) + '$';
            }

            if (field.field === 'changes') {
                tdTable.setAttribute('class', `${crypto.changes > 0 ? 'green' : crypto.changes === 0 ? 'neutral' : 'red'}`);
            }

            if(field.field === 'changes') {
                tdTable.innerHTML = crypto[field.field] + '$';
            }

            row.appendChild(tdTable);
        }
    }
}

/**
 * Create array of crypto currencies by api
 */
async function cryptoCurrencies() {
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
function sortedCryptoCurrencies(field) {
    
    const sortCryptoCurrencies = arrayCryptoCurrencies.sort(function(c1, c2) {
        if(c1[field] < c2[field]) {
            return 1;
        } else {
            return -1;
        }
    })
    return sortCryptoCurrencies;
}
//Field and title for header of currencies
const headerCurrencies = [
    { field: 'currency', title: 'Currency' },
    { field: 'price', title: 'Price' },
]

const forexUsd = [];

//Creat array with currencies information
async function currencies() {
    const arrayCurrencies = ['eur', 'usd', 'jpy', 'gbp', 'chf', 'cad', 'aud'];
    let baseUrl = 'https://financialmodelingprep.com/api/v3/forex/'

    for (let currency of arrayCurrencies) {
        let result = await fetch(baseUrl + currency +'usd');
        result = await result.json();
        forexUsd.push(result);
    }
}

// function createContentCurrencies() {
//     for(let currency of forex) {
//         let row = document.createElement('tr');
//         table.appendChild(row);

//         for(let )

//     }
// }

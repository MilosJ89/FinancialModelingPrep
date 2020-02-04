/**
 * Table component for create table
 * 
 * Function for create header of tables
 * 
 * @author Milos Jovanovic
 */

/**
 * Function for create header of table
 * 
 * @param {string[]} arrayHeader 
 * @param {object[]} items
 * 
 * @returns {type}
 */
async function createHeader(arrayHeader, items) {
    let trTable = document.createElement('tr');
    table.appendChild(trTable);

    for(let title in arrayHeader) {
        let headerTable = document.createElement('th');
        headerTable.innerHTML = arrayHeader[title].title;
        trTable.appendChild(headerTable);

            let arrowDownSpan = document.createElement('span');
            arrowDownSpan.setAttribute('class', 'sort');

            if(arrayHeader[title].title === 'Price') {
                arrowDownSpan.setAttribute('onclick', 'sortPerPrice()');
            }

            if(arrayHeader[title].title === 'Changes') {
                arrowDownSpan.setAttribute('onclick', 'sortPerChanges()');
            }

            if(arrayHeader[title].title === 'Changes %') {
                arrowDownSpan.setAttribute('onclick', 'sortPerChangesPercentage()');
            }

            if(arrayHeader[title].title === 'Crypto Price') {
                arrowDownSpan.setAttribute('onclick', 'sortCryptoCurrenciesPerPrice()');
            }

            if(arrayHeader[title].title === 'Crypto Changes') {
                arrowDownSpan.setAttribute('onclick', 'sortCryptoCurrenciesPerChanges()');
            }

            switch (arrayHeader[title].title) {
                case '':
                case 'Company':
                case 'Website':
                case 'Name':
                case 'Country':
                case 'Currency':
                case 'Exchange':
                case 'Ticker':
                    arrowDownSpan.style.display = 'none';
                    break;
                default:
                    break;
            }

            headerTable.appendChild(arrowDownSpan);
    }

    return items;
}

/**
 * Function for create table at DOM
 */
function createTable() {
    const content = document.getElementById('content');

        const table = document.createElement('table');
        table.setAttribute('id', 'table');
        content.appendChild(table);
}
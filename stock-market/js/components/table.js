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
export async function createHeader(arrayHeader, items) {

    for(let title in arrayHeader) {

        let headerTitle = `<p id='headerTitle' class='headerTitle'>${arrayHeader[title].title}</p>`;
        document.getElementById('header').innerHTML += headerTitle;

            if(arrayHeader[title].hasOwnProperty('clickHandler')) {
                let arrowDownSpan = `<span class='sort' id='${title}'></span>`;
                document.getElementsByClassName('headerTitle')[title].innerHTML += arrowDownSpan;
            }
            
            if(arrayHeader[title].title === 'Country') {
                document.getElementsByClassName('headerTitle')[title].classList.add('center');
            }

            // let arrowDownSpan = `<span class='sort'></span>`;

            // if(arrayHeader[title].title === 'Price') {
            //     arrowDownSpan.setAttribute('onclick', 'sortPerPrice()');
            // }

            // if(arrayHeader[title].title === 'Changes') {
            //     arrowDownSpan.setAttribute('onclick', 'sortPerChanges()');
            // }

            // if(arrayHeader[title].title === 'Changes %') {
            //     arrowDownSpan.setAttribute('onclick', 'sortPerChangesPercentage()');
            // }

            // if(arrayHeader[title].title === 'Crypto Price') {
            //     arrowDownSpan.setAttribute('onclick', 'sortCryptoCurrenciesPerPrice()');
            // }

            // if(arrayHeader[title].title === 'Crypto Changes') {
            //     arrowDownSpan.setAttribute('onclick', 'sortCryptoCurrenciesPerChanges()');
            // }

            //headerTitle.innerHTML = arrowDownSpan;
    }

    return items;
}

/**
 * Function for create table in DOM
 */
export function createTable() {
    const content = document.getElementById('content');

        const table = `<div id="table"></div>`;
        content.innerHTML = table;

            let header = `<div id='header'></div>`;
            document.getElementById('table').innerHTML = header;
            
            let contentTable = `<div id='contentTable'></div>`;
            document.getElementById('table').innerHTML += contentTable;
}
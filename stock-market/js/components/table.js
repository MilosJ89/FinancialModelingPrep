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

    for (let title in arrayHeader) {

        let headerTitle =`<p id='headerTitle' class='headerTitle'>${arrayHeader[title].title}</p>`;
        document.getElementById('header').innerHTML += headerTitle;

            if(arrayHeader[title].hasOwnProperty('clickHandler')) {
                let arrowDownSpan = `<span class='sort ${title}' id=${arrayHeader[title].field}></span>`;
                document.getElementsByClassName('headerTitle')[title].innerHTML += arrowDownSpan;
            }

            if(arrayHeader[title].title === 'Country') {
                document.getElementsByClassName('headerTitle')[title].classList.add('center');
            }
    }
    /**
     * TODO: 
     */
    for (let title in arrayHeader) {
        document.getElementById(arrayHeader[title].field) && document.getElementById(arrayHeader[title].field).addEventListener('click', arrayHeader[title].clickHandler);
    }

    return items;
}

/**
 * Function for create table in DOM
 */
export function createTable() {

    const table = `<div id="table"></div>`;
    content.innerHTML = table;

        let header = `<div id='header'></div>`;
        document.getElementById('table').innerHTML = header;
        
        let contentTable = `<div id='contentTable'></div>`;
        document.getElementById('table').innerHTML += contentTable;
}
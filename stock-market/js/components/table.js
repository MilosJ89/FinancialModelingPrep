const table = document.getElementById('table');

//Create header of table
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

            switch (arrayHeader[title].title) {
                case '':
                case 'Company':
                case 'Website':
                case 'Name':
                    arrowDownSpan.style.display = 'none';
                    break;
                default:
                    break;
            }

            headerTable.appendChild(arrowDownSpan);
    }

    return items;
}
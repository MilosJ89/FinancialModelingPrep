/**
 * Major index
 * 
 * Ticker of major indexes
 * 
 * @author Milos Jovanovic
 */

 /**
  *Function for create ticker with information of major indexes 
  */
async function createMajorIndexes() {
    const url = 'https://financialmodelingprep.com/api/v3/majors-indexes';
    let majorIndexes = await fetch(url);
    majorIndexes = await majorIndexes.json();
    let indexes = majorIndexes.majorIndexesList;

    let tickerWrap = document.querySelector('.ticker-wrap');

        let indexDiv = document.createElement('div');
        indexDiv.setAttribute('class', 'ticker');
        tickerWrap.appendChild(indexDiv);

    for(let index of indexes) {

            let indexItem = document.createElement('div');
            indexItem.setAttribute('class', 'ticker-item');
            indexItem.innerHTML = index.indexName+ ' ' +index.changes;
            indexDiv.appendChild(indexItem);

            if(index.changes > 0) {
                indexItem.setAttribute('class', 'green ticker-item')
            } else if(index.changes < 0) {
                indexItem.setAttribute('class', 'red ticker-item')
            }
    }
}

createMajorIndexes();
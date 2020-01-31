const arrayCompanies = [];

//Create array with information of companies
async function companies() {
    const symbols = ['spy','t','kmi','intc','mu','gdx','ge','seb','eem','ghc','aapl','msft','siri','hpq','cx','efa','amd','snap','fb','orcl'];
    const baseUrl = 'https://financialmodelingprep.com/api/v3/';

    for(let symbol of symbols) {
        let result = await fetch(baseUrl + 'company/profile/' + symbol);
        result = await result.json();
        arrayCompanies.push(result);
    }

    return arrayCompanies;
}

//Field and title for header of company table
const headerCompanies = [ 
    { field: 'image', title: ''},
    { field: 'companyName', title: 'Company'},
    { field: 'price', title: 'Price'},
    { field: 'changes', title: 'Changes'},
    { field: 'changesPercentage', title: 'Changes %'},
    { field: 'website', title: 'Website'}
    ];

//Create content of table
function createContentCompanies() {
    for(let company of arrayCompanies) {
        let row = document.createElement('tr');
        table.appendChild(row);

        for(let field of headerCompanies) {
            let tdTable = document.createElement('td');
            tdTable.innerHTML = company.profile[field.field];

            if(field.field === 'image') {
                tdTable.innerHTML = '';
                let img = document.createElement('img');
                img.setAttribute('src', `${company.profile[field.field]}`);
                tdTable.appendChild(img);
            }

            if (field.field === 'companyName') {
                tdTable.setAttribute('class', 'bold');
            }

            if (field.field === 'changes') {
                tdTable.setAttribute('class', `${company.profile.changes > 0 ? 'green' : company.profile.changes === 0 ? 'neutral' : 'red'}`);
            }

            if(field.field === 'changesPercentage') {
                tdTable.innerHTML = company.profile[field.field].replace(/[()]/g, ''); 
            }

            if(field.field === 'website') {
                tdTable.innerHTML = `<a href=${company.profile[field.field]}>${company.profile[field.field].replace('http://', '')}</a>`;
            }

            row.appendChild(tdTable);
        }
    }
}

//Sorted array companies per field
function sortedCompanies(field) {
    
    const sortCompanies = arrayCompanies.sort(function(c1, c2) {
        if(c1.profile[field] < c2.profile[field]) {
            return 1;
        } else {
            return -1;
        }
    })
    return sortCompanies;
}

//Sorted array companies per changes percentage
// function sortedCompaniesChangesPercentage() {

//     const sortCompaniesChangesPercentage = arrayCompanies.map((changesPercentage) => {
//         return changesPercentage.profile.changesPercentage.replace('%', '');
//     })
// }

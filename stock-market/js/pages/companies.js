/**
 * Companies page
 * 
 * Functions for create content table and sort table with fields
 * 
 * @author Milos Jovanovic 
 */

import {sort} from '../utility';

/**
 * Get information of companies by api
 * 
 * @type {object[]}
 */
let arrayCompanies = [];

/**
 * Array of header companies with fields and titles
 * 
 * @type {object[]}
 */
export const headerCompanies = [ 
    { field: 'image', title: ''},
    { field: 'companyName', title: 'Company', class: 'bold'},
    { field: 'price', title: 'Price', clickHandler: sort.bind(null, 'companies', 'price')},
    { field: 'changes', title: 'Changes', clickHandler: sort.bind(null, 'companies', 'changes')},
    { field: 'changesPercentage', title: 'Changes %', clickHandler: sort.bind(null, 'companies', 'changesPercentage')},
    { field: 'website', title: 'Website'}
];

/**
 * Create array with objects of companies from api
 * 
 * @returns {object[]}
 */
export async function companies() {
    const symbols = ['spy','t','kmi','intc','mu','gdx','ge','seb','eem','ghc','aapl','msft','siri','hpq','cx','efa','amd','snap','fb','orcl'];
    const baseUrl = 'https://financialmodelingprep.com/api/v3/';

    for(let symbol of symbols) {
        let result = await fetch(baseUrl + 'company/profile/' + symbol);
        result = await result.json();
        arrayCompanies.push(result);
    }

    return arrayCompanies;
}

/**
 * Create content table of companies
 */
export function createContentCompanies() {
    document.getElementById('contentTable').setAttribute('class', 'tableId');

    for(let company in arrayCompanies) {

        let item = `<div id='item' class='items'></div>`;
        document.getElementById('contentTable').innerHTML += item;

        for(let field of headerCompanies) {
            let cell = `<div class='${field.field} cell'>${arrayCompanies[company].profile[field.field]}</div>`;
            document.getElementsByClassName('items')[company].innerHTML += cell;

                if (field.hasOwnProperty('class')) {
                    document.getElementsByClassName(field.field)[company].classList.add(field.class);
                }

                switch (field.field) {
                    case 'image':
                        let img = `<img class='img' src='${arrayCompanies[company].profile[field.field]}'></img>`;
                        document.getElementsByClassName('image')[company].innerHTML = img;
                        break;
                    case 'changes':
                        document.getElementsByClassName(field.field)[company].innerHTML = arrayCompanies[company].profile[field.field].toFixed(2);
                        document.getElementsByClassName(field.field)[company].classList.add(`${arrayCompanies[company].profile.changes > 0 ? 'green' : arrayCompanies[company].profile.changes === 0 ? 'neutral' : 'red'}`);
                        break;
                    case 'changesPercentage':
                        document.getElementsByClassName(field.field)[company].innerHTML = arrayCompanies[company].profile[field.field].replace(/[()]/g, '');  
                        break;  
                    case 'website':
                        let link = `<a target='_blank' href=${arrayCompanies[company].profile[field.field]}>${arrayCompanies[company].profile[field.field].replace('http://', '')}</a>`;
                        document.getElementsByClassName(field.field)[company].innerHTML = link;                
                }
        }
    }
}

/**
 * Sorted companies by fields
 * 
 * @param {string} field
 * 
 * Return array with sorted companies
 * @returns {object[]}
 */
export function sortedCompanies(field) {
    const sortCompanies = arrayCompanies.sort(function(c1, c2) {
        let a;
        if (field === 'changesPercentage' && +(c1.profile[field].replace(/[()|%]/g, '')) < +(c2.profile[field].replace(/[()|%]/g, ''))) {
            a = 1;
        } else if (c1.profile[field] < c2.profile[field]) {
            a = 1;
        } else {
            a = -1;
        }
        return a;
    }) 
    return sortCompanies;
}
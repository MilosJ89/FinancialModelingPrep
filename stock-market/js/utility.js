/**
 * 
 * Utility
 * 
 * Description
 * 
 * @author Milos Jovanovic
 * 
 */

import * as companies from '../js/pages/companies';
import {createHeader} from '../js/components/table';
//import {headerCompanies} from '../js/pages/companies';

// export function sortTable(createContent, sortItems) {
//     document.getElementById('contentTable').innerHTML = '';

//     createContent(sortItems);
// }

/**
 * Sort companies in table by changes
 */
export function sortCompaniesPerChanges() {
    console.log('milos');
    // document.getElementById('contentTable').innerHTML = '';
    // companies.createContentCompanies(companies.sortedCompanies('changes'));
}

/**
 * Sort companies in table by changes percentage
 */
export function sortCompaniesPerChangesPercentage() {
    content.innerHTML = '';

    table.createTable();

    table.createHeader(companies.headerCompanies);
    companies.createContentCompanies(companies.sortedCompanies('changesPercentage'));
}

/**
 * Sort companies in table by price 
 */
export function sortCompaniesPerPrice() {
    content.innerHTML = '';

    table.createTable();

    table.createHeader(companies.headerCompanies);
    companies.createContentCompanies(companies.sortedCompanies('price'));
}

/**
 * Sort crypto currencies in table by changes
 */
export function sortCryptoCurrenciesPerChanges() {
    content.innerHTML = '';

    table.createTable();

    table.createHeader(cryptoCurrencies.headerCryptoCurrencies);
    cryptoCurrencies.createContentCryptoCurrrencies(cryptoCurrencies.sortedCryptoCurrencies('changes'));
}

/**
 * Sort crypto currencies in table by price
 */
export function sortCryptoCurrenciesPerPrice() {
    content.innerHTML = '';

    table.createTable;

    table.createHeader(cryptoCurrencies.headerCryptoCurrencies);
    cryptoCurrencies.createContentCryptoCurrrencies(cryptoCurrencies.sortedCryptoCurrencies('price'));
}
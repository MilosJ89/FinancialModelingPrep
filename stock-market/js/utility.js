/**
 * 
 * Utility
 * 
 * TODO:
 * 
 * @author Milos Jovanovic
 * 
 */

import * as companies from '../js/pages/companies';
import * as cryptoCurrencies from '../js/pages/cryptoCurrencies';

/**
 * Function for sort table
 * 
 * @param {string} page 
 * @param {string} field 
 */
export function sort(page, field) {
    document.getElementById('contentTable').innerHTML = '';

    switch(page) {
        case 'companies':
            companies.createContentCompanies(companies.sortedCompanies(field));
            break;
        case 'cryptoCurrencies':
            cryptoCurrencies.createContentCryptoCurrrencies(cryptoCurrencies.sortedCryptoCurrencies(field));        
            break;
        default:
            break;
    }
}
// This script was made by 'Ahmed Osama' in 2023 May

/**
 * Global variables
 */
const counter = document.querySelector('.counter');
const button = document.querySelector('.increment');
const reset = document.querySelector('#reset');
const word = document.querySelector('.word');

// Local Storage
let countLocal = localStorage.getItem('count') || 0;

/**
 * End global variables
 */


/**
 * Start helper code 
 */

counter.textContent = countLocal;
// Start an Event listener on the buttons

// 1- Increment button: 
button.addEventListener('click', (e) => {
    countLocal ++;
    localStorage.setItem('count', countLocal);
    counter.textContent = countLocal;
    
    // checking conditions:
    if (countLocal === 1000) {
        word.textContent = 'لقد انتهيت من العد';

        setTimeout(() => {
            word.textContent = ' أستغفر الله' }
            , 1500); 
        if (countLocal === 1000) {
            countLocal = 0;
        };
    };
});
// 2- Reset button: 
reset.addEventListener('click', (e) => {
    countLocal = 0;
    counter.textContent = 0;
    localStorage.removeItem('count');
});

/**
 * End start helper code 
 */


/**
 * End of the script
 */
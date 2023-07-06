// This script was made by 'Ahmed Osama' in 2023 May

/**
 * Global variables
 */
const counter = document.querySelector('.counter');
const button = document.querySelector('.increment');
const reset = document.querySelector('#reset');
const word = document.querySelector('.word');

// Local Storage
let countLocalNew = localStorage.getItem('countNew') || 0;

/**
 * End global variables
 */


/**
 * Start helper code 
 */

counter.textContent = countLocalNew;
// Start an Event listener on the buttons

// 1- Increment button: 
button.addEventListener('click', (e) => {
    countLocalNew ++;
    localStorage.setItem('countNew', countLocalNew);
    counter.textContent = countLocalNew;
    
    // checking conditions:
    if (countLocalNew === 1000) {
        word.textContent = 'لقد انتهيت من العد';

        setTimeout(() => {
            word.textContent = 'الصلاة على النبي محمد' }
            , 1500); 
        if (countLocalNew === 1000) {
            countLocalNew = 0;
        };
    };
});
// 2- Reset button: 
reset.addEventListener('click', (e) => {
    countLocalNew = 0;
    counter.textContent = 0;
    localStorage.removeItem('countNew');
});


/**
 * End start helper code 
 */


/**
 * End of the script
 */
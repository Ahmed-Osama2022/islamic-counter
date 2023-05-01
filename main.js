// This script was made by 'Ahmed Osama' in 2023 May

/**
 * Global variables
 */
const counter = document.querySelector('.counter');
const button = document.querySelector('button');
const word = document.querySelector('.word');

/**
 * End global variables
 */


/**
 * Start helper code 
 */
let count = 0;
button.addEventListener('click', (e) => {
    count += 1;
    counter.textContent = count;
   
    if (count === 1000) {
        word.textContent = 'لقد انتهيت من العد';

        setTimeout(() => {
            word.textContent = 'الصلاة على النبي محمد' }
            , 1500); 
        if (count === 1000) {
            count = 0;
        };
    };
  

});


/**
 * End start helper code 
 */


/**
 * End of the script
 */
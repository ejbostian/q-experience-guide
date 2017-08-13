//////////////////////////////
//// VAR DECLARATIONS ///////
////////////////////////////
const gettingStartedLabel       = document.querySelector('#getting-started__label');
const gettingStartedSubMenu     = document.querySelector('#getting-started__sub-menu');
const coreStyleLabel            = document.querySelector('#core-style__label');
const coreStyleSubMenu          = document.querySelector('#core-style__sub-menu');
const hamburgerMenu             = document.querySelector('.hamburger-menu');
const closeButton               = document.querySelector('.nav__close-btn');
const navBar                    = document.querySelector('.nav');


//////////////////////////////
//// EVENT LISTENERS ////////
////////////////////////////
gettingStartedLabel.addEventListener('click', () => {
    gettingStartedSubMenu.classList.toggle('submenu--active');
});

coreStyleLabel.addEventListener('click', () => {
    coreStyleSubMenu.classList.toggle('submenu--active');
});

hamburgerMenu.addEventListener('click', () => {
    navBar.classList.add('nav--show');
    window.setTimeout(1000);
    navBar.classList.remove('nav--hide');

});

closeButton.addEventListener('click', () => {
    navBar.classList.add('nav--hide');
    window.setTimeout(1000);
    navBar.classList.remove('nav--show');
});

// TOGGLE MENU
const menu = document.querySelector('#mobile');
const menuLinks = document.querySelector('.navbar-menu');
const navLogo = document.querySelector('#navbar-logo');


const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#myhome');
    const menuMenu = document.querySelector('#mymenu');
    const storyMenu = document.querySelector('#mystory');
    let scrollPos = window.scrollY

    // ADDS HIGHLIGHT CLASS TO MENU ITEMS
    if(window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight');
        menuMenu.classList.remove('highlight');
        return
    } else if (window.innerWidth > 960 && scrollPos < 1100) {
        menuMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        storyMenu.classList.remove('highlight');
     return
    } else if (window.innerWidth > 960 && scrollPos < 2345) {
        storyMenu.classList.add('highlight');
        menuMenu.classList.remove('highlight');
        return
    }

    if(elem && window.innerWidth < 960 && scrollPos < 600 || elem) {
        elem.classList.remove('highlight');
    }
} 

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu)


// CLOSE MOBILE MENU
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if(window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active')
    }
}

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);
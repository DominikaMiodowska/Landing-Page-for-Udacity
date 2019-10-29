/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


// create navbar items

const listStart = document.querySelector('#navbar__list');

const listAbout = document.createElement('li');
const listBooks = document.createElement('li');
const listEbooks = document.createElement('li');
const listContact = document.createElement('li');

listStart.appendChild(listAbout);
listStart.appendChild(listBooks);
listStart.appendChild(listEbooks);
listStart.appendChild(listContact);

listAbout.innerHTML = "<a class='menu__link' id='scrolliing1' href='#about'>About</a>";
listEbooks.innerHTML = "<a class='menu__link' id='scrolliing2' href='#ebooks'>Ebooks</a>";
listBooks.innerHTML = "<a class='menu__link' id='scrolliing3' href='#books'>Books</a>";
listContact.innerHTML = "<a class='menu__link' id='scrolliing4' href='#contact'>Contact</a>";


let linkScrolling1 = document.querySelector('#scrolliing1');
let linkScrolling2 = document.querySelector('#scrolliing2');
let linkScrolling3 = document.querySelector('#scrolliing3');
let linkScrolling4 = document.querySelector('#scrolliing4');

linkScrolling1.scrollIntoView({behavior: "smooth"});
linkScrolling2.scrollIntoView({behavior: "smooth"});
linkScrolling3.scrollIntoView({behavior: "smooth"});
linkScrolling4.scrollIntoView({behavior: "smooth"});
        
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
const navbar_list = document.getElementById("navbar__list");

const menu_links = document.querySelectorAll('.menu__link');
const sections = document.querySelectorAll('section');


// Add class 'active' to section when near top of viewport

function changeActiveItem(){
    // total number of sections
    let index  = sections.length

    while(--index && window.scrollY + 350 < sections[index].offsetTop){}
   
    //remove active class 
    menu_links.forEach((link)=> link.classList.remove('active'));
    sections.forEach((section) => section.classList.remove('active-section'));

    //add active class to navigation item
    menu_links[index].classList.add('active');
    sections[index].classList.add('active-section');
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Scroll to anchor ID using scroll event
changeActiveItem();
window.addEventListener('scroll', changeActiveItem);


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

const navLink = ["about", "books", "ebooks", "contact"];
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// function getIDFromHeader(str){
//     return str.split(" ").join("").toLowerCase();
// }

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

    listAbout.innerHTML = "<a class='menu__link' href='#about'>About</a>";
    listEbooks.innerHTML = "<a class='menu__link' href='#ebooks'>Ebooks</a>";
    listBooks.innerHTML = "<a class='menu__link' href='#books'>Books</a>";
    listContact.innerHTML = "<a class='menu__link' href='#contact'>Contact</a>";
      
        
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
const navbar_list = document.getElementById("navbar__list");

const menu_links = document.querySelectorAll('.menu__link');
const sections = document.querySelectorAll('section');


/**
 * End Main Functions
 * Begin Events
 * 
*/

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

// Scroll to anchor ID using scrollTO event
changeActiveItem();
window.addEventListener('scroll', changeActiveItem);


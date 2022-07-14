    'use strict';


let menu  = document.querySelector('.menu-bar');
let navigation = document.querySelector('.nav-items');

menu.addEventListener('click',function(){
    navigation.classList.toggle('hidden');
})
//Single page look
const homePage = document.querySelector('.landing-flex-container');


const aboutMeBtn = document.querySelector('.about');
const homeBtn = document.querySelector('.home');
const abouMeContainer = document.querySelector('.about-page-container');
const projectsContainer = document.querySelector('.projects-page-container');
const projectBtn = document.querySelector('.projects');
const contactsContainer = document.querySelector('.contacts-page-container');
const contactBtn = document.querySelector('.contact');

// aboutme page
// aboutme page
// aboutme page


aboutMeBtn.addEventListener('click',function(){
    homePage.classList.add('hidden');

    abouMeContainer.classList.remove('hidden');


})


///Home page
///Home page
///Home page
///Home page

homeBtn.addEventListener('click',function(){
    if (homePage.classList.contains('hidden')){
        homePage.classList.remove('hidden');
    }
    abouMeContainer.classList.add('hidden');
    contactsContainer.classList.add('hidden');
    projectsContainer.classList.add('hidden');
})




// projects page
projectBtn.addEventListener('click',function(){
    abouMeContainer.classList.add('hidden');
    projectsContainer.classList.remove('hidden');
    homePage.classList.add('hidden');
})











//Contact Page
contactBtn.addEventListener('click',function(){
    abouMeContainer.classList.add('hidden');
    projectsContainer.classList.add('hidden');
    contactsContainer.classList.remove('hidden');
    homePage.classList.add('hidden');
})
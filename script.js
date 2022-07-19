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

const typewriter = document.querySelector('.typewriter')
const ide_tab_1 = document.querySelector('.btn1')
const ide_tab_2 = document.querySelector('.btn2')
const ide_tab_3 = document.querySelector('.btn3')

const html_dummy = document.querySelector('.html_dummy')
const javascript_dummy = document.querySelector('.javascript_dummy')
const python_dummy = document.querySelector('.python_dummy')

// Ide settings
// Ide settings
// Ide settings

// function 

// html_dummy.addEventListener
let tabs_hide_show = function(dummy_class){
    dummy_class.classList.toggle('tabs_hidden')
    this.style.pointerEvents ='none';
    this.classList.add('tabs_active');

}
ide_tab_1.style.pointerEvents = 'none'
ide_tab_1.classList.add('tabs_active');

ide_tab_1.addEventListener('click',function(){
    ide_tab_2.classList.remove('tabs_active');
    ide_tab_1.classList.add('tabs_active');
    ide_tab_3.classList.remove('tabs_active');
    html_dummy.classList.toggle('tabs_hidden')
    javascript_dummy.classList.add('tabs_hidden')
    python_dummy.classList.add('tabs_hidden')
    ide_tab_2.style.pointerEvents = 'all'
    ide_tab_1.style.pointerEvents = 'none'
    ide_tab_3.style.pointerEvents = 'all'
 
   
})
ide_tab_2.addEventListener('click',function(){
    ide_tab_2.classList.add('tabs_active');
    ide_tab_1.classList.remove('tabs_active');
    ide_tab_3.classList.remove('tabs_active');
    javascript_dummy.classList.toggle('tabs_hidden')
    html_dummy.classList.add('tabs_hidden')
    python_dummy.classList.add('tabs_hidden')
    ide_tab_1.style.pointerEvents = 'all'
    ide_tab_2.style.pointerEvents = 'none'
  ide_tab_3.style.pointerEvents = 'all'

})
ide_tab_3.addEventListener('click',function(){
    ide_tab_2.classList.remove('tabs_active');
    ide_tab_1.classList.remove('tabs_active');
    ide_tab_3.classList.add('tabs_active');
    ide_tab_1.style.pointerEvents = 'all'
    ide_tab_2.style.pointerEvents = 'all'
    ide_tab_3.style.pointerEvents = 'none'
    html_dummy.classList.add('tabs_hidden')
    javascript_dummy.classList.add('tabs_hidden')
    python_dummy.classList.toggle('tabs_hidden')
   
})

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
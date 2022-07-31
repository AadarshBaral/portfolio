    'use strict';


let menu  = document.querySelector('.menu-bar');
let navigation = document.querySelector('.nav-items');

menu.addEventListener('click',function(){
    navigation.classList.toggle('hidden');
})
//Single page look


const aboutMeBtn = document.querySelector('.about');
const homeBtn = document.querySelector('.home');
const homePage = document.querySelector('.landing-flex-container');
const abouMeContainer = document.querySelector('.about-page-container');
const projectsContainer = document.querySelector('.projects-page-container');
const contactsContainer = document.querySelector('.contacts-page-container');
const projectBtn = document.querySelector('.projects');
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



///Home page
///Home page
///Home page
///Home page

homeBtn.addEventListener('click',function(){
    if (homePage.classList.contains('hidden')){
        homePage.classList.remove('hidden');
    }
    localStorage.setItem('page','home')

    abouMeContainer.classList.add('hidden');
    contactsContainer.classList.add('hidden');
    projectsContainer.classList.add('hidden');
})


// projects page
projectBtn.addEventListener('click',function(){
    abouMeContainer.classList.add('hidden');
    projectsContainer.classList.remove('hidden');
    homePage.classList.add('hidden');
    localStorage.setItem('page','project')
})

//Contact Page
contactBtn.addEventListener('click',function(){
    abouMeContainer.classList.add('hidden');
    projectsContainer.classList.add('hidden');
    contactsContainer.classList.remove('hidden');
    homePage.classList.add('hidden');
    localStorage.setItem('page','contact')
})

// reload handeling
//Success of this thing was one of the most fun thing i have ever experienced during my learning phases of javascript
if (!(localStorage.getItem('page'))){
    localStorage.setItem('page','home')
}

if (sessionStorage.getItem("is_reloaded")){
    // getting the page info on reload. Here we especially look for the page session storage
    const section = localStorage.getItem('page')
    const test= document.querySelector(`[data-name="${section}"]`)
    // then we are adding a class called active to that section which value is stored on the session
    test.classList.add('active')


    const main_pages_list =  document.querySelectorAll('.page-c');
    const pageClass   = []
    main_pages_list.forEach(function(elem){
        pageClass.push(elem)
    
    })
    // Here we check in pageClass if it has such element which contains 'active' class and if it has then set it to visible
    // otherwise add hidden classes to all other page-containers. page-container includes home,contact,project,and about
    pageClass.forEach(function(elem){
        if (elem.classList.contains('active')){
            if (elem.classList.contains('hidden')){
                elem.classList.remove('hidden')
            }
        }else{
            if (!(elem.classList.contains('hidden'))){
                elem.classList.add('hidden')
            }
        }
    })  
}

sessionStorage.setItem("is_reloaded", true);


//page reload check ends here

aboutMeBtn.addEventListener('click',function(){
    homePage.classList.add('hidden');
    localStorage.setItem('page','about')
    abouMeContainer.classList.remove('hidden');


})

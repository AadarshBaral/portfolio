"use strict";



let menu = document.querySelector(".menu-bar");
let navigation = document.querySelector(".nav-items");

menu.addEventListener("click", function () {
  navigation.classList.toggle("hidden");
});
//Single page look

const aboutMeBtn = document.querySelector(".about");
const homeBtn = document.querySelector(".home");
const homePage = document.querySelector(".landing-flex-container");
const abouMeContainer = document.querySelector(".about-page-container");
const projectsContainer = document.querySelector(".projects-page-container");
const contactsContainer = document.querySelector(".contacts-page-container");
const projectBtn = document.querySelector(".projects");
const contactBtn = document.querySelector(".contact");

// const typewriter = document.querySelector(".typewriter");
const ide_tab_1 = document.querySelector(".btn1");
const ide_tab_2 = document.querySelector(".btn2");
const ide_tab_3 = document.querySelector(".btn3");

const html_dummy = document.querySelector(".html_dummy");
const javascript_dummy = document.querySelector(".javascript_dummy");
const python_dummy = document.querySelector(".python_dummy");
const aboutContent = document.querySelector(".about-me");
const projSection = document.querySelector(".each-proj-section");
// projSection.insertAdjacentHTML("beforebegin",'<h1>Hi</h1>')
// Api calls

// console.log(proj_list)
// console.log(hallOfFame)
// const aboutLoader = function(){
//   proj_list.forEach(function (elem, ind, arr) {
//     console.log('hi')
//     projSection.insertAdjacentHTML('beforeend',`<div class="proj-sec">
//     <h1 class="project-heading">Hall of Fame</h1>
//     <div class="hall-of-fame">

//     <div class="project-box">
//       <div class=" proj-box"></div>
//       <div class="main-box proj-box">
//           <div class="proj-img-container">
//             <img src="./img/cc.png" alt="">
//           </div>
//           <div class="proj-info-container">

//             <div class="proj-card-info">
//               <button class="tag-button">Full-Stack</button>
//             </div>
//           </div>
//       </div>
//     </div>

//     </div>
//     </div>
//     `)

//   });
// }


// console.log(hallContainer);

// const load = function () {
//   const client = contentful.createClient({
//     // This is the space ID. A space is like a project folder in Contentful terms
//     space: "9z18mcgf183d",
//     // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
//     accessToken: "oYkDAKZPpYetUJvkSvlPvJMU9l0TOGBPnoic8ifx8D8",
//   });

//   const getAboutMe = async function () {
//     try {
//       let hall = await client.getEntries({
//         content_type: "portfolio",
//       });
//       //  console.log(hall)

//       const aboutme = Object.entries(hall);
//       const dt = aboutme[4][1][0]["fields"]["portfolio"];

//       const proj_list = Object.entries(dt["project_page"]);
//       // console.log(proj_list)
//       const [about, ...d] = Object.entries(dt);
//       //   const [a, photoshop, c] = Object.entries(d[0][1]);
//       aboutContent.innerText = about[1]["description"];

//       const hallOfFame = proj_list[0];
//       const fullStackProjects = hallOfFame[1];
//       // console.log(hallOfFame);
//       // console.log(hallOfFame[1][0])
//       const returnBoxes = function () {
//       let val = ``;
//      let boxItems=   Object.entries(hallOfFame[1][0]).map(function(boxElem) {
//           boxElem[1]['image']
//           val  =`<div class="project-box">
//           <div id = 'proj-box' name="hi" class="proj-box"></div>
//           <div class="main-box proj-box">
//             <div class="proj-img-container">
//               <img class = 'trigger-image' src=${boxElem[1]['image']} alt="" />
//             </div>
//             <div class="proj-info-container">
//               <div class="proj-card-info">
//                 <button id = 'mod' class="tag-button">Full-Stack</button>
//               </div>
//             </div>
//           </div>
//         </div>`
        
//          return val
//         });
//         const boxElementCombined = boxItems.join(" ")
//         console.log(boxElementCombined)
//         return boxElementCombined
//       };
    
// returnBoxes()
//       proj_list.forEach(function (elem, ind, arr) {
//         const title =
//           elem[0][0].toUpperCase() + elem[0].slice(1).replaceAll("_", " ");

//         // console.log(elem[1][0]);

//         // returnBoxes()
//         projSection.insertAdjacentHTML(
//           "beforebegin",
//           `<div class="proj-sec">
//                   <h1 class="project-heading">${title}</h1>
//                   <div class="hall-of-fame">
   
//                   </div>
//                   </div>
//               `
//         );
//       });
//       // hallContainer.forEach(function (hallElem) {
//       //   hallElem.insertAdjacentHTML("beforebegin", "<h1>hi</h1>");
//       // });
//     } catch (err) {
//       console.log(err.name);
//     }
//   };

//   getAboutMe();
// };
///
// load();
const hallContainer = document.querySelectorAll(".hall-of-fame");
// console.log(hallContainer)

// Image carousel
class SlideStories {
  constructor(id) {
    this.slide = document.querySelector(`[data-slide="${id}"]`);
    this.active = 0;
    this.init();
  }

  activeSlide(index) {
    this.active = index;
    this.items.forEach((item) => item.classList.remove("active"));
    this.items[index].classList.add("active");
    this.thumbItems.forEach((item) => item.classList.remove("active"));
    this.thumbItems[index].classList.add("active");
    this.autoSlide();
  }

  prev() {
    if (this.active > 0) {
      this.activeSlide(this.active - 1);
    } else {
      this.activeSlide(this.items.length - 1);
    }
  }

  next() {
    if (this.active < this.items.length - 1) {
      this.activeSlide(this.active + 1);
    } else {
      this.activeSlide(0);
    }
  }

  addNavigation() {
    const nextBtn = this.slide.querySelector(".slide-next");
    const prevBtn = this.slide.querySelector(".slide-prev");
    nextBtn.addEventListener("click", this.next);
    prevBtn.addEventListener("click", this.prev);
  }

  addThumbItems() {
    this.items.forEach(() => (this.thumb.innerHTML += `<span></span>`));
    this.thumbItems = Array.from(this.thumb.children);
  }

  autoSlide() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(this.next, 5000);
  }

  init() {
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.items = this.slide.querySelectorAll(".slide-items > *");
    this.thumb = this.slide.querySelector(".slide-thumb");
    this.addThumbItems();
    this.activeSlide(0);
    this.addNavigation();
  }
}

new SlideStories("slide");
new SlideStories("slide2");
new SlideStories("slide3");

///

// Ide settings
// Ide settings
// Ide settings

// function

// html_dummy.addEventListener
let tabs_hide_show = function (dummy_class) {
  dummy_class.classList.toggle("tabs_hidden");
  this.style.pointerEvents = "none";
  this.classList.add("tabs_active");
};
ide_tab_1.style.pointerEvents = "none";
ide_tab_1.classList.add("tabs_active");

ide_tab_1.addEventListener("click", function () {
  ide_tab_2.classList.remove("tabs_active");
  ide_tab_1.classList.add("tabs_active");
  ide_tab_3.classList.remove("tabs_active");
  html_dummy.classList.toggle("tabs_hidden");
  javascript_dummy.classList.add("tabs_hidden");
  python_dummy.classList.add("tabs_hidden");
  ide_tab_2.style.pointerEvents = "all";
  ide_tab_1.style.pointerEvents = "none";
  ide_tab_3.style.pointerEvents = "all";
});
ide_tab_2.addEventListener("click", function () {
  ide_tab_2.classList.add("tabs_active");
  ide_tab_1.classList.remove("tabs_active");
  ide_tab_3.classList.remove("tabs_active");
  javascript_dummy.classList.toggle("tabs_hidden");
  html_dummy.classList.add("tabs_hidden");
  python_dummy.classList.add("tabs_hidden");
  ide_tab_1.style.pointerEvents = "all";
  ide_tab_2.style.pointerEvents = "none";
  ide_tab_3.style.pointerEvents = "all";
});
ide_tab_3.addEventListener("click", function () {
  ide_tab_2.classList.remove("tabs_active");
  ide_tab_1.classList.remove("tabs_active");
  ide_tab_3.classList.add("tabs_active");
  ide_tab_1.style.pointerEvents = "all";
  ide_tab_2.style.pointerEvents = "all";
  ide_tab_3.style.pointerEvents = "none";
  html_dummy.classList.add("tabs_hidden");
  javascript_dummy.classList.add("tabs_hidden");
  python_dummy.classList.toggle("tabs_hidden");
});

// aboutme page
// aboutme page
// aboutme page

///Home page
///Home page
///Home page
///Home page

homeBtn.addEventListener("click", function () {
  if (homePage.classList.contains("hidden")) {
    homePage.classList.remove("hidden");
  }
  localStorage.setItem("page", "home");

  abouMeContainer.classList.add("hidden");
  contactsContainer.classList.add("hidden");
  projectsContainer.classList.add("hidden");
});

// projects page
projectBtn.addEventListener("click", function () {
  abouMeContainer.classList.add("hidden");
  projectsContainer.classList.remove("hidden");
  homePage.classList.add("hidden");
  localStorage.setItem("page", "project");
  contactsContainer.classList.add("hidden");
});

//Contact Page
contactBtn.addEventListener("click", function () {
  abouMeContainer.classList.add("hidden");
  projectsContainer.classList.add("hidden");
  contactsContainer.classList.remove("hidden");
  homePage.classList.add("hidden");
  localStorage.setItem("page", "contact");
});

// reload handeling
//Success of this thing was one of the most fun thing i have ever experienced during my learning phases of javascript
if (!localStorage.getItem("page")) {
  localStorage.setItem("page", "home");

  abouMeContainer.classList.add("hidden");
  projectsContainer.classList.add("hidden");
  contactsContainer.classList.add("hidden");
}

if (sessionStorage.getItem("is_reloaded")) {
  // getting the page info on reload. Here we especially look for the page session storage
  const section = localStorage.getItem("page");
  const test = document.querySelector(`[data-name="${section}"]`);
  // then we are adding a class called active to that section which value is stored on the session
  test.classList.add("active");

  const main_pages_list = document.querySelectorAll(".page-c");
  const pageClass = [];
  main_pages_list.forEach(function (elem) {
    pageClass.push(elem);
  });
  // Here we check in pageClass if it has such element which contains 'active' class and if it has then set it to visible
  // otherwise add hidden classes to all other page-containers. page-container includes home,contact,project,and about
  pageClass.forEach(function (elem) {
    if (elem.classList.contains("active")) {
      if (elem.classList.contains("hidden")) {
        elem.classList.remove("hidden");
      }
    } else {
      if (!elem.classList.contains("hidden")) {
        elem.classList.add("hidden");
      }
    }
  });
}

sessionStorage.setItem("is_reloaded", true);

// page reload check ends here

aboutMeBtn.addEventListener("click", function () {
  homePage.classList.add("hidden");
  contactsContainer.classList.add("hidden");
  localStorage.setItem("page", "about");
  projectsContainer.classList.add("hidden");
  abouMeContainer.classList.remove("hidden");
});
document.getElementsByTagName("body")[0].style.overflow = "auto";
// abouMeContainer.style.overflowY = 'hidden'

// let aboutHeader = document.querySelector('.about-header-text')
// console.log(typeof aboutHeader.textContent)
// let tex = aboutHeader.textContent

// for ( let i= 0 ; i <= tex.length-1 ; i++){

//   i.addEventListener('click',()=>console.log('ok'))
// }
// aboutHeader.forEach(element => {
//   element.addEventListener('hover',function(e){
//     console.log('kk')
//   })
// });
// const hiddenInfo = document.querySelector(".hidden-info");
// const infoButton = document.querySelector(".info-button");

// infoButton.addEventListener("click", () =>
//   hiddenInfo.classList.toggle("hidden")
// );

// set up text to print, each item in array is new line

var aText = new Array("Welcome to my Portfolio");
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ""; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
  sContents = " ";
  iRow = Math.max(0, iIndex - iScrollAt);
  var destinations = document.querySelectorAll("#typedtext");
  destinations.forEach((destination) => {
    while (iRow < iIndex) {
      sContents += aText[iRow++] + "<br />";
    }
    destination.innerHTML =
      sContents + aText[iIndex].substring(0, iTextPos) + "_";
    if (iTextPos++ == iArrLength) {
      iTextPos = 0;
      iIndex++;
      if (iIndex != aText.length) {
        iArrLength = aText[iIndex].length;
        setTimeout("typewriter()", 500);
      }
    } else {
      setTimeout("typewriter()", iSpeed);
    }
  });
}

typewriter();

//Project card script
//Project card script
//Project card script
//Project card script
const shadowBox = document.querySelectorAll(".proj-box");
const hoverBox = document.querySelectorAll(".main-box");

hoverBox.forEach((elem) => {
  elem.addEventListener("mouseover", function () {
    //took 20 minutes to figure this out
    this.parentNode.firstElementChild.classList.add("shadow-box");
    // shadowBox.forEach((elem2)=> {
    //   elem2.classList.add('shadow-box')
    // })
  });
  elem.addEventListener("mouseout", (e) => {
    shadowBox.forEach(function (elem3) {
      elem3.classList.remove("shadow-box");
      elem3.style.transition = ".3s all";
    });
  });
});
//Modal window
let  modalBtns = document.querySelectorAll(".proj-img-container") 
const modalWindow = document.querySelectorAll(".modal-container");
const overlay = document.querySelector("#overlay");
const modalClose = document.querySelectorAll(".close-modal");
console.log(modalClose)
modalBtns.forEach(function(btn){
  btn.addEventListener('click',function(){
    let modal = btn.getAttribute("data-modal");
    document.getElementById(modal).classList.remove('modal-hidden')
    overlay.style.display = 'block'
  })
})

// const projectModalPopup = document.querySelectorAll(".projects-container");
// // console.log(projectModalPopup);
// const modalWindow = document.querySelector(".modal-container");
// const overlay = document.querySelector("#overlay");


// const modalOpen = function () {
//   modalWindow.classList.remove("modal-hidden");
//   document.getElementById("overlay").style.display = "block";
  
// };

const modalCloser = function () {
  modalWindow.forEach(function(mod){
    mod.classList.add('modal-hidden')
  })
  document.getElementById("overlay").style.display = "none";
};
modalClose.forEach(function(closebtn){
  closebtn.addEventListener('click',modalCloser)
})

// projectModalPopup.forEach(function (e) {
//   console.log(e);
//   e.addEventListener("click", function (elem) {
//     if (elem.target.tagName === "IMG") {
//       modalOpen();
//       console.log("click");
//     }
//     console.log(elem.target.tagName);
//   });
// });
overlay.addEventListener("click", modalCloser);

//SLider
// const leftArrow = document.querySelector(".slide-left");
// const rightArrow = document.querySelector(".slide-right");
// const slider = document.querySelector('.slider')
// const sliderNodes = slider.children
// console.log(sliderNodes)

// let curSlide = 0
// let pos = 0
// const slides = document.querySelectorAll(".slide");
// // slides.forEach((s, i) => {
// //   pos = 100 * i;
// //   s.style.transform = `translateX(${pos}%)`;
// //   if (pos !== 0) {
// //     s.style.display = "none";
// //   }
// // });
// //next slide
// curSlide = 0;
// rightArrow.addEventListener('click',function(){

// for ( let i = 0 ; i< sliderNodes.length ; i++){
//   sliderNodes[i].style.display = 'none'
// }

// })
// //


const projectModalPopup = document.querySelectorAll(".project-box");
// console.log(projectModalPopup);
const modalWindow = document.querySelector(".modal-container");
const overlay = document.querySelector("#overlay");
const modalClose = document.querySelector(".close-modal");

const modalOpen = function () {
  modalWindow.classList.remove("modal-hidden");
  document.getElementById("overlay").style.display = "block";
};

const modalCloser = function () {
  modalWindow.classList.add("modal-hidden");
  document.getElementById("overlay").style.display = "none";
};
modalClose.addEventListener("click", modalCloser);

projectModalPopup.forEach(function (elem) {
  elem.addEventListener("click", function () {
    console.log("click");
    modalOpen();
  });
});
overlay.addEventListener("click", modalCloser);
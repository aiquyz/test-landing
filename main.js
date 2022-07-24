const menuButton = document.querySelector(".menu__button");
const modalMenu = document.querySelector(".modal--menu");
const menuClose = document.querySelector(".modal__button--close");


menuButton.addEventListener("click", () => {
  modalMenu.classList.add("add__modal");
});

menuClose.addEventListener("click", () => {
    modalMenu.classList.remove("add__modal");
  });
  

'use strict';

/**
 * 

/**
 * element toggle function
 */
// Vous pouvez placer cette déclaration dans un autre fichier ou à un endroit approprié dans votre code.
// Assurez-vous de ne pas répéter cette déclaration ailleurs.
// const toggleElem = function (elem: Element) { elem.classList.toggle("active"); }

// const header = document.querySelector<HTMLElement>("[data-header]");
// const backTopBtn = document.querySelector<HTMLElement>("[data-back-top-btn]");

// Définir les variables avec le type HTMLElement ou null
const header: HTMLElement | null = document.getElementById("your-header-id");
const backTopBtn: HTMLElement | null = document.getElementById("your-back-top-button-id");

// Vérifier si les variables ne sont pas null avant de les utiliser
if (header && backTopBtn) {
  window.addEventListener("scroll", function () {
    if (window.scrollY >= 100) {
      header.classList.add("active");
      backTopBtn.classList.add("active");
      header.classList.add("header-anim");
    } else {
      header.classList.remove("active");
      backTopBtn.classList.remove("active");
      header.classList.remove("header-anim");
    }
  });
}

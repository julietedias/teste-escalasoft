document.addEventListener("DOMContentLoaded", function () {
  const menuLateral = document.querySelector(".menu-lateral");
  const menuItems = document.querySelectorAll(".menu-lateral a");

  if (window.innerWidth >= 1024) {
    menuLateral.classList.add("menu-aberto");
  } else {
    menuLateral.classList.add("menu-fechado");
  }

  if (menuItems.length > 0) {
    menuItems[0].classList.add("ativo");
  }

  menuItems.forEach((item) => {
    item.addEventListener("click", setMenuItemAtivo);
  });
});

function abreMenu() {
  const menuLateral = document.querySelector(".menu-lateral");
  const spans = document.querySelectorAll(".menu-lateral a span");

  spans.forEach((span) => {
    const displayValue = window.getComputedStyle(span).display;

    if (displayValue === "none") {
      menuLateral.classList.remove("menu-aberto");
      menuLateral.classList.add("menu-fechado");
    }
  });

  if (window.innerWidth < 1024) {
    if (menuLateral.classList.contains("menu-fechado")) {
      menuLateral.classList.remove("menu-fechado");
      menuLateral.classList.add("menu-aberto");

      spans.forEach((span) => {
        span.style.display = "inline";
      });
    } else {
      menuLateral.classList.remove("menu-aberto");
      menuLateral.classList.add("menu-fechado");

      spans.forEach((span) => {
        span.style.display = "none";
      });
    }
  }
}

function setMenuItemAtivo(event) {
  const menuItems = document.querySelectorAll(".menu-lateral a");

  menuItems.forEach((item) => {
    item.classList.remove("ativo");
  });

  event.currentTarget.classList.add("ativo");
}

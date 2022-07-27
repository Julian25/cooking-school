
let menu = document.getElementById("menu__hamburger");


function myFunction(x) {
  menu.classList.toggle("change-menu__hamburger");
  x.classList.toggle("change");
}


function hamburger() {
  let botonera =  document.getElementById('menu_dropdown')
  if(botonera.style.display=='block') {
    botonera.style.display= 'none'
    } else {
    botonera.style.display= 'block'
    }
}



const menuButton = document.getElementById('hamburgerIcon');
const menuBg = document.getElementById('menuBackground');
const menu = document.getElementById('menu');

let menuOpen = false;

menuButton.addEventListener('click', (e) =>{
   if(menuOpen){
    menuButton.style.content = "url('./images/icon-hamburger.svg')"; 
   
    menu.style.animation="closeMenu 1s";

    setTimeout(() => {
       menu.style.display = 'none';
       menuBg.style.display = 'none';
    }, 900);

    document.querySelector('html').style.overflow = 'visible';
   }else{
    menuButton.style.content = "url('./images/icon-close.svg')"; 
    menu.style.display = 'flex';
    menu.style.animation="openMenu 1s";
    menuBg.style.display = 'block'; 
    document.querySelector('html').style.overflow = 'hidden';
   }
   menuOpen = !menuOpen;
})


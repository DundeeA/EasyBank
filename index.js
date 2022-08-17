const menuIcon = document.getElementById('hamburgerIcon');
const menuButton = document.getElementById('menuButton');
const menuBg = document.getElementById('menuBackground');
const menu = document.getElementById('menu');

let menuOpen = false;

menuButton.addEventListener('click', (e) =>{
   if(menuOpen){
    menuIcon.style.content = "url('./images/icon-hamburger.svg')"; 
    menu.style.animation="closeMenu .7s";
    menuBg.style.animation = 'fadeBgOut .7s ease-in';
    setTimeout(() => {
       menu.style.display = 'none';
       menuBg.style.display = 'none';
    }, 700);
    document.querySelector('html').style.overflow = 'visible';
   }else{
    menuIcon.style.content = "url('./images/icon-close.svg')"; 
    menu.style.animation="openMenu .7s";
    menuBg.style.animation = 'fadeBgIn .7s ease-in';
    menu.style.display = 'flex';
    menuBg.style.display = 'block'; 
    document.querySelector('html').style.overflow = 'hidden';
   }
   menuOpen = !menuOpen;
})


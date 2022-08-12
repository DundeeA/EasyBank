const menuButton = document.getElementById('hamburgerIcon');
const menu = document.getElementById('menu');

let menuOpen = false;

menuButton.addEventListener('click', (e) =>{
   if(menuOpen){
    menuButton.style.content = "url('./images/icon-hamburger.svg')"; 
    menu.style.display = 'none';
   }else{
    menuButton.style.content = "url('./images/icon-close.svg')"; 
    menu.style.display = 'flex';
   }
   menuOpen = !menuOpen;
})
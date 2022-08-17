const menuIcon = document.getElementById('hamburgerIcon');
const menuButton = document.getElementById('menuButton');
const menuBg = document.getElementById('menuBackground');
const menu = document.getElementById('menu');

let menuOpen = false;

menuButton.addEventListener('click', (e) =>{
   if(menuOpen){
    menuIcon.style.content = "url('./images/icon-hamburger.svg')"; //change icon back

    //play close animation
    menu.style.animation="closeMenu .7s"; 
    menuBg.style.animation = 'fadeBgOut .7s ease-in';
   
    //hide menu
    setTimeout(() => {
       menu.style.display = 'none';
       menuBg.style.display = 'none';
    }, 700);
    //enable scrolling
    document.querySelector('html').style.overflow = 'visible'; 

   }else{
    menuIcon.style.content = "url('./images/icon-close.svg')"; //change icon to 'X'
    menu.style.opacity = '0%';

    //play open animation
    menu.style.animation="openMenu .7s";
    menuBg.style.animation = 'fadeBgIn .7s ease-in';
    menu.style.opacity = '100%';
    //Show menu
    setTimeout(() => {
      menu.style.display = 'flex';
      menuBg.style.display = 'block'; 
   }, 100);


    document.querySelector('html').style.overflow = 'hidden'; // disable scrolling
   }
   menuOpen = !menuOpen;
})


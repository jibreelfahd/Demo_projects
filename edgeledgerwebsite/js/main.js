//Transparent Navbar
window.addEventListener('scroll', function(){
   if(window.scrollY > 150)
      document.querySelector('#main-nav').style.opacity = 0.8;
   else{
      document.querySelector('#main-nav').style.opacity = 1
   }
});
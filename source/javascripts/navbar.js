function initUpdateNavbarOnScroll() {
 var navbar = document.querySelector('.navbar-wagon');
 console.log(navbar.classList);
 window.addEventListener('scroll', function () {
   if (window.scrollY >= window.innerHeight) {
     navbar.classList.add('navbar-wagon-white');
   } else {
     navbar.classList.remove('navbar-wagon-white');
   }
 });
}

function initUpdateNavbarLinkOnScroll() {
 var navbarLinks = document.querySelectorAll('.navbar-wagon-link');
 window.addEventListener('scroll', function () {
   if (window.scrollY >= window.innerHeight) {
     // console.log(navbarLinks)
     navbarLinks.forEach(function (item) {
       item.classList.add('navbar-wagon-white-link');
     });
   } else {
     navbarLinks.forEach(function (item) {
       item.classList.remove('navbar-wagon-white-link');
     });
   }
 });
}


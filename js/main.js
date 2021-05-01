/* === MENU SHOW === */
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/* === ACTIVE AND REMOVE MENU === */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    // Ativar Link
    navLink.forEach(n => n.classList.remove('active__nav'))
    this.classList.add('active__nav')

    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/* === SCROLL REVEAL ANIMATION === */
const sr= ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/* === SCROLL HOME === */
sr.reveal('.home__title',{})
sr.reveal('.home__title-color',{delay: 600})
sr.reveal('.home__img',{delay: 400})

/* === SCROLL QUEM SOMOS === */
sr.reveal('.about__img',{})
sr.reveal('.about__subtitle',{delay: 200})
sr.reveal('.about__text',{delay: 400})

/* === SCROLL SERVIÇOS === */
sr.reveal('.service__img',{interval: 200})

/* === SCROLL CONTATO === */
sr.reveal('.contact__input',{interval: 200})
sr.reveal('.contact__subtitle',{interval: 200})
sr.reveal('.contact__text',{interval: 200})
sr.reveal('.contact__button',{interval: 200})

/* === SCROLL QUEM SOMOS === */
sr.reveal('.groups__img',{})
sr.reveal('.groups__subtitle',{delay: 200})
sr.reveal('.groups__text',{delay: 400})
sr.reveal('.accordation__info',{delay: 200})

/* === ACCORDING === */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

/* === SWIPPER CAROUSEL === */
const mySwiper = new Swiper('.testimonial__container', {
  spaceBetween: 16,
  loop: true,
  grabCursor: true,
  speed: 1000,
  autoplay: {
    enabled: true,
    delay: 5000,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
})

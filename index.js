// --------------- for slider-----------
var swiper = new Swiper(".slide-content",{
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextE1: ".swiper-button-next",
        prevE1: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    }

});



// ---------------------for navbar

const navul =document.getElementById('navul');
const closeMenu = document.getElementById('closeMenu');
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click',()=>{
    navul.classList.add('activated');
})

closeMenu.addEventListener('click',()=>{
    navul.classList.remove('activated');
})

const navbar = document.getElementById('navbar');
const heroDiv = document.querySelector('.heroDiv');
const heroImg = document.querySelector('.heroImg');

heroDiv.classList.add('active')
heroImg.classList.add('active')



//for reveal
window.addEventListener('scroll',()=>{
    const reveals = document.querySelectorAll('.reveal');

    let scrollTop = window.scrollY;
    if (scrollTop > 100){
        navbar.classList.add('activated')
    }else{
        navbar.classList.remove('activated')
    }

    //---------------------reveal
    
    for(let i = 0; i < reveals.length; i++){
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 140;

        if (revealTop < windowHeight - revealPoint){
            reveals[i].classList.add('active')
        }else{
            reveals[i].classList.remove('active')
        }

        }


})


//..........................testimonial...........

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });
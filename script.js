const MENU = document.querySelectorAll('.nav__list_link');
const anchors = document.querySelectorAll('a[href*="#"]');
const header = document.querySelector('.header');
const iphoneVer = document.querySelector('.iphone_ver > img');
const iphoneHor = document.querySelector('.iphone_hor > img');
let shadowVer = true,
    shadowHor = true;


// active block 
MENU.forEach(el => {
    el.addEventListener('click', () => {
        MENU.forEach(element => {
            element.classList.remove('nav__list_link-active');
        });
        el.classList.add('nav__list_link-active');
    });
});


//swipe to block
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

// fixed header 

window.onscroll = function showHeader() {
    if (window.pageYOffset > 300) {
        header.classList.add('header-fixed');
    } else {
        header.classList.remove('header-fixed');
    }
}


iphoneVer.addEventListener('click', () => {
    if (shadowVer) {
        iphoneVer.src = 'assets/images/iphone_vertical-shadow.png';
        shadowVer = false;
    } else {
        iphoneVer.src = 'assets/images/iphone_vertical.png';
        shadowVer = true;
    }
})

iphoneHor.addEventListener('click', () => {
    if (shadowHor) {
        iphoneHor.src = 'assets/images/phone-horizontal-shadow.png';
        shadowHor = false;
    } else {
        iphoneHor.src = 'assets/images/iPhone_Horizontal.png';
        shadowHor = true;
    }
})


//slider 

let slideIndex = 1,
        slides = document.querySelectorAll('.slider__item'),
        prev = document.querySelector('.arrow--prev'),
        next = document.querySelector('.arrow--next'),
        slider = document.querySelector('.slider');


    function showSlides(a) {

        if (a > slides.length) {
            slideIndex = 1;
        }
        if (a < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((el)=> {
            el.style.display = 'none';
        });
        

        slides[slideIndex - 1].style.display = 'flex';
    }

    function changeSlide(a) {
        showSlides(slideIndex += a);
    }

    function currentSlide(a) {
        showSlides(slideIndex = a);
    }

    prev.addEventListener('click', function() {
        changeSlide(-1);
        slider.classList.toggle('slider-blue');
    });

    next.addEventListener('click', function() {
        changeSlide(1);
        slider.classList.toggle('slider-blue');
    });

    showSlides(slideIndex);


const MENU = document.querySelectorAll('.nav__list_link');
const anchors = document.querySelectorAll('a[href*="#"]');
const header = document.querySelector('.header');
const iphoneVer = document.querySelector('.iphone_ver > img');
const iphoneHor = document.querySelector('.iphone_hor > img');
const portfolioItems = document.querySelectorAll('.portfolio__item');
const portfolio = document.querySelector('.portfolio');
const portfolioMenu = document.querySelectorAll('.portfolio__list_item');
const services = document.getElementById('services');
const about = document.getElementById('about');
const contact = document.getElementById('contact');
let servicesH = services.offsetTop,
    portfolioH = portfolio.offsetTop,
    aboutH = about.offsetTop,
    contactH = contact.offsetTop;


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
    

    if (window.pageYOffset > portfolioH + servicesH + 850 - 95) {
        MENU.forEach(element => {
            element.classList.remove('nav__list_link-active');
        });
        MENU[4].classList.add('nav__list_link-active');
    } else if (window.pageYOffset > portfolioH + servicesH) {
        MENU.forEach(element => {
            element.classList.remove('nav__list_link-active');
        });
        MENU[3].classList.add('nav__list_link-active');
    } else if (window.pageYOffset > portfolioH - 95) {
        MENU.forEach(element => {
            element.classList.remove('nav__list_link-active');
        });
        MENU[2].classList.add('nav__list_link-active');
    } else if (window.pageYOffset > servicesH - 105) {
        MENU.forEach(element => {
            element.classList.remove('nav__list_link-active');
        });
        MENU[1].classList.add('nav__list_link-active');
    } else {
        MENU.forEach(element => {
            element.classList.remove('nav__list_link-active');
        });
        MENU[0].classList.add('nav__list_link-active');
    }
}



// function offset(el) {
//     var rect = el.getBoundingClientRect(),
//     scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     return { top: rect.top + scrollTop}
// }


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



// portfolio menu  
portfolioMenu.forEach(el => {
    el.addEventListener('click', () => {
        portfolioMenu.forEach(element => {
            element.classList.remove('portfolio__list_item-active');
        });
        el.classList.add('portfolio__list_item-active');
        portfolioItems.forEach(element => {
            element.classList.remove('portfolio__item-active');
        });
    });
});



    // portfolio active 
portfolioItems.forEach(el => {
    el.addEventListener('click', (e) => {
        portfolioItems.forEach(element => {
            element.classList.remove('portfolio__item-active');
        });
        el.classList.add('portfolio__item-active');
        
    });
});


portfolio.addEventListener('click', e => {
    e.preventDefault();
    let target = e.target;
    if(!target.classList.contains('portfolio__img')) {
        portfolioItems.forEach(element => {
            element.classList.remove('portfolio__item-active');
        });
    }
    console.log(target);
});





 // Tabs 

 let info = document.querySelector('.portfolio__list'),
     tabContent = document.querySelectorAll('.portfolio__inner');




function hideTabContent(a) {
 for (let i = a; i < tabContent.length; i++) {
     tabContent[i].classList.remove('show');
     tabContent[i].classList.add('hide');
 }
}

hideTabContent(1);

function showTabContent(b) {
 if (tabContent[b].classList.contains('hide')) {
     tabContent[b].classList.remove('hide');
     tabContent[b].classList.add('show');
 }
}

info.addEventListener('click', function(e) {
 let target = e.target;

 if (target && target.classList.contains('portfolio__list_item')) {
     for (let i = 0; i < portfolioMenu.length; i++) {
         if (target == portfolioMenu[i]) {
             hideTabContent(0);
             showTabContent(i);
         }
     }
 }
});


// Modal

const submitBtn = document.getElementById('submit'),
      overlay = document.querySelector('.overlay'),
      okBtn = document.getElementById('ok'),
      name = document.getElementById('name'),
      email = document.getElementById('email'),
      subject = document.getElementById('subject'),
      blog = document.getElementById('blog'),
      theme = document.getElementById('theme'),
      descr = document.getElementById('descr');


submitBtn.addEventListener('click', e => {
    e.preventDefault();
    if (name.value !== '' && email.value !== ''){
        if (subject.value !== '') {
            theme.textContent = 'Тема: ' + subject.value;
        }
        if (blog.value !== '') {
            descr.textContent = 'Описание: ' + blog.value;
        }
        overlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
})


okBtn.addEventListener('click', e => {
    e.preventDefault();
    overlay.style.display = 'none';
    document.body.style.overflow = '';
    subject.value = '';
    blog.value = '';
    name.value = '';
    email.value = '';
    theme.textContent = 'Без темы';
    descr.textContent = 'Без описания';
})


overlay.addEventListener('click', e =>{
    let target = e.target;
    if (target.classList.contains('overlay')) {
        overlay.style.display = 'none';
        document.body.style.overflow = '';
        subject.value = '';
        blog.value = '';
        name.value = '';
        email.value = '';
        theme.textContent = 'Без темы';
        descr.textContent = 'Без описания';
    }
})

const MENU = document.querySelectorAll('.nav__list_link');
const anchors = document.querySelectorAll('a[href*="#"]')

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
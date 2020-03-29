'use strict'
let firstScreen = document.querySelector(".img-one"),
    secondScreen = document.querySelector(".img-two"),
    thirdScreen = document.querySelector(".display1"),
    phone = document.querySelectorAll(".slider__phone");
const MENU = document.getElementById('menu');
const TAB = document.getElementById('tab');
const portfolio_img = document.getElementById("imges");
const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const openModalButton = document.querySelector('.open-modal');
const closeModalButton = document.querySelector('.modal__close');
const form = document.getElementById('contacts-form');
const contactName = document.getElementById('contact_name');
const contactEmail = document.getElementById('contact_email');
const modalSub = document.getElementById('contact_subject');
const modalTextarea = document.getElementById('contact_textarea');
const modalTheme = document.querySelector('.modal-theme');
const modalDescr = document.querySelector('.modal-descr');
/* Scroll header */
MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('li>a').forEach(el => el.classList.remove('activated'));
    event.target.classList.add('activated');
});
document.addEventListener('scroll', onScroll);

function onScroll(event) {
    const curPos = window.scrollY;
    const sect = document.querySelectorAll('#wrapper>div');
    const links = document.querySelectorAll('#menu>li>a');
    sect.forEach((el) => {
        if (el.offsetTop <= (curPos + 100) && (el.offsetTop + el.offsetHeight) > (curPos + 100)) {
            links.forEach((a) => {
                a.classList.remove('activated');
                if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
                    a.classList.add('activated');
                }
            })
        }
    });
}
/*For sticky menu height*/
document.querySelectorAll('a[href^="#"').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        let href = this.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href);
        const topOffset = document.querySelector('.header').offsetHeight;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;
        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth',
            block: 'start'
        });
    });
});

/* Scroll header */
var cbpAnimatedHeader = (function() {
    var docElem = document.documentElement,
        header = document.querySelector('.header'),
        headernav = document.querySelector('.header-nav'),
        changeHeaderOn = 570;

    function init() {
        window.addEventListener('scroll', function(event) {
            scrollPage();
        }, false);
    }

    function scrollPage() {
        var sy = scrollY();
        if (sy >= changeHeaderOn) {
            header.classList.add('cbp-af-header-shrink');
        } else {
            header.classList.remove('cbp-af-header-shrink');
        }
    }

    function scrollY() {
        return window.pageYOffset;
    }
    init();
})();
/*Slides*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
    slide_blue();
}

function minusSlide() {
    showSlides(slideIndex -= 1);
    slide_blue();
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    const divr = document.getElementById("slider");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
let slid_content_blue = document.querySelector(".slider_content"),
    slid_blue = document.querySelector(".slider"),
    arrow = document.querySelectorAll(".slider__arrow");
for (let elem of arrow) {
    elem.addEventListener("click", slide_blue);
}

function slide_blue() {
    if (this.alt == "Arrowr") {
        slid_content_blue.classList.toggle("blue");
        slid_blue.classList.toggle("blue");

    } else if (this.alt == "Arrowl") {
        slid_content_blue.classList.toggle("blue");
        slid_blue.classList.toggle("blue");
    }
}
/* Screen Hider */
for (let elem of phone) {
    elem.addEventListener("click", off_screen);
}

function off_screen() {
    if (this.alt == "Phone1") {
        firstScreen.classList.toggle("disabled");
    } else if (this.alt == "Phone2") {
        secondScreen.classList.toggle("disabled");
    } else if (this.alt == "Phone3") {
        thirdScreen.classList.toggle("disabled");
    }

}

/* Mix gallery images */
function gallery_mix() {
    let gallery = document.querySelector('.portfolio_images');
    let arrGallery = Array.from(gallery.getElementsByClassName('portfolio_img'));
    let newarr = arrGallery.sort(() => Math.random() - 0.5)
    gallery.innerHTML = "";
    newarr.forEach(item => gallery.append(item));
}
/* Active gallery img */
portfolio_img.addEventListener('click', event => {
        if (event.target.tagName == 'IMG') {
            portfolio_img.querySelectorAll('img').forEach(item => {
                item.style.boxShadow = "none";
            });
            event.target.style.boxShadow = "0px 0px 0px 5px #F06C64";
        }
    })
    /* Active btn gallery */
TAB.addEventListener('click', (event) => {
    TAB.querySelectorAll('li>a').forEach(el => el.classList.remove('activat'));
    event.target.classList.add('activat');
});

/* Form inputs */
form.addEventListener('submit', e => {
    e.preventDefault()
    modal.classList.add('modal__open')
    body.classList.add('body-lock')
    contactName.value = '';
    contactEmail.value = '';
    if (modalSub.value) {
        modalTheme.innerHTML = `Тема: ${modalSub.value}`;
    } else modalTheme.innerHTML = 'Без темы';
    if (modalTextarea.value) {
        modalDescr.innerHTML = `Описание: ${modalTextarea.value}`;
    } else modalDescr.innerHTML = 'Без описания';
})
closeModalButton.addEventListener('click', e => {
    e.preventDefault()
    modal.classList.remove('modal__open')
    body.classList.remove('body-lock')
    modalSub.value = '';
    modalTextarea.value = '';
});
/* Hambgurger */

const hambgurger = document.querySelector('.hamburger');
const headernav = document.getElementById('nav');
const logo = document.querySelector('.logo');
const sect = document.querySelectorAll('#wrapper>div');
const links = document.querySelectorAll('#menu>li>a');
hambgurger.addEventListener('click', () => {
    if (headernav.style.left === "-100%" || headernav.style.left === "") {
        hambgurger.classList.add("hamb_opened");
        headernav.style.left = "0%";
        logo.style.paddingLeft = "50px";
        logo.classList.add("logo_left");
        body.style.overflow = "hidden";
        headernav.classList.add("shadow");
    } else {
        hambgurger.classList.remove("hamb_opened");
        headernav.style.left = "-100%";
        logo.style.paddingLeft = "148px";
        logo.classList.remove("logo_left");
        body.style.overflow = "visible";
        headernav.classList.remove("shadow");
    }
});
MENU.addEventListener('click', close_burg);

function close_burg(event) {
    if (hambgurger.classList.contains('hamb_opened')) {
        sect.forEach((el) => {
            links.forEach((a) => {
                if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
                    hambgurger.classList.remove("hamb_opened");
                    headernav.style.left = "-100%";
                    logo.style.paddingLeft = "148px";
                    body.style.overflow = "visible";
                    headernav.classList.remove("shadow");
                }
            });
        });
    }
};
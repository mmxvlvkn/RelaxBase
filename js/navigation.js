const navList = document.querySelector('.navigation__list');
let navListStyleLeft = 0;

if (document.documentElement.clientWidth > 1225) {
    navListStyleLeft = (document.documentElement.clientWidth - 1160) / 2 
} else {
    navListStyleLeft = 35;
}

if (navList) {
    navList.style.left = `${navListStyleLeft}px`; 
}

window.addEventListener('resize', function () {
    if (document.documentElement.clientWidth > 1225) {
        navListStyleLeft = (document.documentElement.clientWidth - 1160) / 2 
    } else {
        navListStyleLeft = 35;
    }

    if (navList) {
        navList.style.left = `${navListStyleLeft}px`; 
    }
});

let navListStyleTop = 0;

if (scrollY < 128) {
    navListStyleTop = 148 - scrollY;
} else {
    navListStyleTop = 20;
}

if (navList) {
    navList.style.top = `${navListStyleTop}px`;
}

window.addEventListener('scroll', function (event) {
    if (scrollY < 128) {
        navListStyleTop = 148 - scrollY;
    } else {
        navListStyleTop = 20;
    }

    if (navList) {
        navList.style.top = `${navListStyleTop}px`;
    }
});
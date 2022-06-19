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

//...................................................................................................//
//Отцентрование на мобилках

const navItems = navList.querySelectorAll('.navigation__item');
let navItemMaxWidth = 0;
let currentWidthPosition = 42;

changingWidthNavItems();

addEventListener('resize', () => {
    if (document.documentElement.clientWidth >= 1050 && currentWidthPosition !== 42) {
        currentWidthPosition = 0;
        changingWidthNavItems()
    } else if (document.documentElement.clientWidth < 1050 && document.documentElement.clientWidth >= 990 && currentWidthPosition !== 1) {
        currentWidthPosition = 1;
        changingWidthNavItems()
    } else if (document.documentElement.clientWidth < 990 && document.documentElement.clientWidth >= 940 && currentWidthPosition !== 2) {
        currentWidthPosition = 2;
        changingWidthNavItems()
    } else if (document.documentElement.clientWidth < 940 && currentWidthPosition !== 3) {
        currentWidthPosition = 3;
        changingWidthNavItems()
    } 
});

function changingWidthNavItems() {
    for (item of navItems) {
        if (item.offsetWidth > navItemMaxWidth) {
            navItemMaxWidth = item.offsetWidth;
        }
    }
    
    for (item of navItems) {
        item.style.width = `${navItemMaxWidth}px`
    }
}
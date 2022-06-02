const images = document.querySelectorAll('.hotel-images__image');

if (document.documentElement.clientWidth <= 560) {
    if (images[4].classList.contains('hotel-images__image_big')) {
        images[4].classList.remove('hotel-images__image_big');
    }

    if (!(images[3].classList.contains('hotel-images__image_big'))) {
        images[3].classList.add('hotel-images__image_big');
        images[6].classList.add('hotel-images__image_big');
    }
} 

window.addEventListener('resize', function() {
    console.log('Yes');
    if (document.documentElement.clientWidth <= 560) {
        if (images[4].classList.contains('hotel-images__image_big')) {
            images[4].classList.remove('hotel-images__image_big');
        }

        if (!(images[3].classList.contains('hotel-images__image_big'))) {
            images[3].classList.add('hotel-images__image_big');
            images[6].classList.add('hotel-images__image_big');
        }
    } else {
        if (!(images[4].classList.contains('hotel-images__image_big'))) {
            images[4].classList.add('hotel-images__image_big');
        }

        if (images[3].classList.contains('hotel-images__image_big')) {
            images[3].classList.remove('hotel-images__image_big');
            images[6].classList.remove('hotel-images__image_big');
        }
    }
});

let orderСhanged = false;
const infoBlock = document.querySelector('.hotel__info');
const infoBlockParent = document.querySelector('.hotel__about-body');

if (document.documentElement.clientWidth <= 768) {
    if (!orderСhanged) {
        infoBlockParent.insertAdjacentElement('afterbegin', infoBlock);
        orderСhanged = true;
    }
}

window.addEventListener('resize', function() {
    if (document.documentElement.clientWidth <= 768) {
        if (!orderСhanged) {
            infoBlockParent.insertAdjacentElement('afterbegin', infoBlock);
            orderСhanged = true;
        }
    } else {
        if (orderСhanged) {
            infoBlockParent.insertAdjacentElement('beforeend', infoBlock);
            orderСhanged = false;
        }
    }
});
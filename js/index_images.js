const images = document.querySelectorAll('.images__image');

if (document.documentElement.clientWidth <= 768) {
    if (!(images[3].classList.contains('images__image_big'))) {
        for (let i = 0; i < 20; i++) {
            images[3 + 6*i].classList.add('images__image_big');
        }
    }  
}

window.onresize = function() {
    if (document.documentElement.clientWidth <= 768) {
        if (!(images[3].classList.contains('images__image_big'))) {
            for (let i = 0; i < 20; i++) {
                images[3 + 6*i].classList.add('images__image_big');
            }
        }  
    } else {
        if (images[3].classList.contains('images__image_big')) {
            for (let i = 0; i < 20; i++) {
                images[3 + 6*i].classList.remove('images__image_big');
            }
        }  
    }
}
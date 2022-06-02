const body = document.querySelector('body');
const headerList = document.querySelector('.header__list');

if (body) {
    body.addEventListener('click', function(event) {
        if (headerList) {
            if (!headerList.classList.contains('_active')) {
                if (event.target.classList.contains('header__button')) {
                    body.classList.add('_lock');
                    headerList.classList.add('_active');
                }
            } else {
                if (!event.target.closest('.header__list')) {
                    body.classList.remove('_lock');
                    headerList.classList.remove('_active');
                }
            }
        }
    });
}



if (headerList) {
    headerList.style.top = `${82 - this.scrollY}px`
}

window.addEventListener('scroll', function() {
    if (headerList) {
        headerList.style.top = `${82 - this.scrollY}px`
    }
});




const contactsItem = document.querySelector('.header__item-contacts');
const contacts = document.querySelector('.contacts');

if (body) {
    body.addEventListener('click', function(event) {
        if (contactsItem && contacts) {
            if (!contacts.classList.contains('_active')) {
                if (event.target.classList.contains('header__select')) {
                    contacts.classList.add('_active');
                }
            } else {
                if (!event.target.closest('.contacts')) {
                    contacts.classList.remove('_active');
                }
            }
        }
    });
}
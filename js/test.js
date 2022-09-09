const form = document.querySelector('.test__form');
const name = document.querySelector('.test__input-name');
const tel = document.querySelector('.test__input-tel');
const btn = document.querySelector('.test__submit');

form.addEventListener('submit', event => {
    event.preventDefault();

    fetch('http://127.0.0.1:4500', {
            method: 'POST',
            body: JSON.stringify({
                name: name.value,
                tel: tel.value
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
});
'use strict';

let user = JSON.parse(localStorage.getItem('user'));

if (user && user?.name && user?.phone && user?.time) {
    const formData = new FormData();
    formData.append('Ismi', user?.name);
    formData.append('Telefon raqami', user?.phone);
    formData.append(`Ro'yxatdan o'tgan vaqti`, user?.time);
    fetch('https://script.google.com/macros/s/AKfycbzxwXnhu47vjwWcdELyA5vpYyDkjklAwakfRWF9i80GmNund7A55t9MeV-enmQ36PZe/exec', {
        method: 'POST',
        body: formData
    })
        .then(res => res.json())
        .then((res) => {
            localStorage.clear();
        })
} else {
    localStorage.clear();
}

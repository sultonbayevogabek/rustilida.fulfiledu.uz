'use strict';

let user = JSON.parse(localStorage.getItem('user'));

if (user && user?.name && user?.phone && user?.time) {
    const formData = new FormData();
    formData.append('Ismi', user?.name);
    formData.append('Telefon raqami', user?.phone);
    formData.append(`Ro'yxatdan o'tgan vaqti`, user?.time);

    fetch('https://script.google.com/macros/s/AKfycbzmN9e5w-_PGUPsUPkDCxU1tbnKBvsGLLl8EbdjuoTIDUoXPoceH6Or_3E5q4A6Ej0KhQ/exec', {
        method: 'POST',
        body: formData
    })
        .then(res => res.json())
        .then(() => {
            localStorage.clear();
        })
} else {
    localStorage.clear();
}

'use strict';

let user = JSON.parse(localStorage.getItem('user'));

if (user && user?.name && user?.phone && user?.time) {
    const formData = new FormData();
    formData.append('Ismi', user?.name);
    formData.append('Telefon raqami', user?.phone);
    formData.append(`Ro'yxatdan o'tgan vaqti`, user?.time);

    fetch('https://script.google.com/macros/s/AKfycbzj7cTeUDfF7EpoRY9_vk8sd9NbxyKO8tPC33cLQ40ME2CiI7okzhcJ4mRdDmXzVtUv/exec', {
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

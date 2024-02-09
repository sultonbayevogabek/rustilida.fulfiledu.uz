'use strict';

let user = JSON.parse(localStorage.getItem('user'));

if (user && user?.name && user?.phone && user?.time) {
    const formData = new FormData();
    formData.append('Ismi', user?.name);
    formData.append('Telefon raqami', user?.phone);
    formData.append(`Ro'yxatdan o'tgan vaqti`, user?.time);

    fetch('https://script.google.com/macros/s/AKfycbykNRk6zvtZszZ_f3uoEvBWYV2EsdddyitGYwDmfFIt4oVj6L4EoT_6NOY7Hp_5sneTyw/exec', {
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

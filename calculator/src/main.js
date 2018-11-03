var clickButtton = function (type) {
    const ekisyou1 = document.getElementById("ekisyou1");
    const ekisyou2 = document.getElementById("ekisyou2");
    switch (type) {
        case 'CE':
        case 'C':
        ekisyou1.innerHTML = ''
        ekisyou2.innerHTML = ''
        break;
    }
    ekisyou2.innerHTML = ekisyou2.innerHTML + type;
}

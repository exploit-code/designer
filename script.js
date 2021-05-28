const link = document.querySelectorAll('.header-nav-list__item');
const box = document.querySelectorAll('.box');

for (let x = 0; x < link.length; x++) {
    for (let y = 0; y < box.length; y++) {
        link[x++].addEventListener('click', (evt) => {
            evt.preventDefault();
            box[y].scrollIntoView({
                behavior: "smooth"
            });
        });
    }
}
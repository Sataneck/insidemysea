const animatedElements = document.querySelectorAll(
    '.section-heading, .concert-card, .releases-heading, .releases-grid, .releases-footer, .contacts-heading, .contacts-content, .contacts-footer'
);
// ИЗМЕНЕНИЕ ШАПКИ ПРИ ПРОКРУТКЕ

const header = document.querySelector('.header');

function updateHeader() {
    if (window.scrollY > 30) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', updateHeader);
updateHeader();

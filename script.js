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
// ПЕРЕХОД К СЛЕДУЮЩЕМУ РАЗДЕЛУ

const scrollIndicator = document.querySelector('.scroll-indicator');

const pageSections = [
    document.querySelector('#concerts'),
    document.querySelector('#releases'),
    document.querySelector('#contacts')
];

scrollIndicator.addEventListener('click', (event) => {
    event.preventDefault();

    const nextSection = pageSections.find(section => {
        return section.offsetTop > window.scrollY + 100;
    });

    if (nextSection) {
        nextSection.scrollIntoView({
            behavior: 'smooth'
        });
    } else {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
});
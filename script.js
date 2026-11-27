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

// ГЕНЕРАЦИЯ КАРТОЧЕК КОНЦЕРТОВ

const concertList = document.querySelector('#concert-list');

const today = new Date();
today.setHours(0, 0, 0, 0);

const upcomingConcerts = concerts
    .filter(concert => new Date(concert.date + 'T00:00:00') >= today)
    .sort((a, b) => new Date(a.date) - new Date(b.date));

if (upcomingConcerts.length === 0) {
    concertList.innerHTML = `
        <div class="no-concerts">
            <p>НОВЫЕ ДАТЫ СКОРО</p>
        </div>
    `;
} else {
    concertList.innerHTML = upcomingConcerts.map(concert => `
        <article class="concert-card">

            <div class="concert-date">
                <span class="date-day">${concert.day}</span>
                <span class="date-month">${concert.month}</span>
            </div>

            <div class="concert-info">
                <h3>${concert.title}</h3>
                <p class="concert-location">
                    ${concert.city} <span> / </span> ${concert.venue}
                </p>
            </div>

            <div class="concert-links">
                <a href="${concert.eventLink}"
                   target="_blank"
                   rel="noopener noreferrer">
                    О СОБЫТИИ ↗
                </a>

                ${concert.ticketLink ? `
                    <a href="${concert.ticketLink}"
                       class="ticket-button"
                       target="_blank"
                       rel="noopener noreferrer">
                        БИЛЕТЫ ↗
                    </a>
                ` : ''}
            </div>

        </article>
    `).join('');
}

// ГЕНЕРАЦИЯ КАРТОЧЕК РЕЛИЗОВ

const releasesGrid = document.querySelector('#releases-grid');

if (releasesGrid) {
    releasesGrid.innerHTML = releases.map(release => `
    <a href="${release.link}"
       class="release-card"
       target="_blank"
       rel="noopener noreferrer">

        <div class="release-cover">
            <picture>
                <img src="${release.image}-620.avif"
                     srcset="${release.image}-620.avif 620w,
                             ${release.image}-1240.avif 1240w"
                     sizes="(max-width: 700px) 86vw, 335px"
                     alt="${release.alt}"
                     loading="lazy">
            </picture>

            <span class="release-arrow">↗</span>
        </div>

        <h3>${release.title}</h3>
        <p>${release.year}</p>

    </a>
    `).join('');
}

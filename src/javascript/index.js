const banner = document.querySelector('.banner');

const links = document.querySelectorAll('a');
const container = document.querySelector('main');

const home = document.querySelector('#Home');
const buttons = document.querySelectorAll('.banner-btn')


/* Prototipo para el carusel de imagenes*/
buttons.forEach( btn => {
    btn.addEventListener('click', function () {
        if(this.getAttribute('id') == 'next'){
            home.style.backgroundColor = '#FFBC11' 
        } else {
            home.style.backgroundColor = '#17dada'
        }
    })
});


banner.addEventListener('click', function () {
    if (this.style.height == '50px') {
        this.style.height = '80%';
        this.style.transition = 'ease-in-out .4s';
        
    } else {
        this.style.height = '50px'
        this.style.transition = 'ease-in .4s'
    }
})


links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        let href = link.getAttribute('href');
        let section = document.querySelector(href);
        container.scrollTo({
            left: section.offsetLeft,
            behavior: 'smooth'
        });
    });
})


/*
for (const link of links) {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const href = link.getAttribute('href');
        const section = document.querySelector(href);
        container.scrollTo({
            left: section.offsetLeft,
            behavior: 'smooth'
        });
    });
}
*/
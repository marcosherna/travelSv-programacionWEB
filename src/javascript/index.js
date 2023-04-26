const banner = document.querySelector('.banner');

const links = document.querySelectorAll('a');
const container = document.querySelector('main');

const home = document.querySelector('#Home');
const buttons = document.querySelectorAll('.banner-btn')

const navHover = document.querySelector('.nav-hover');
const navItems = document.querySelectorAll('li');
const navTextSelection = document.querySelector('.nav-text-selection');
/* reseteamos la clase que se le asigna 
    al div nav-hover*/
navHover.classList.remove('active');


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
        this.style.transition = 'all .4s ease-in-out';
        
    } else {
        this.style.height = '50px'
        this.style.transition = 'all .4s ease-in'
    }
})


let index = 0;
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

    navItems[index].addEventListener('mouseover', () => {
        navHover.classList.remove('disable');
        navHover.classList.add('active');

        let text = link.getAttribute('href').replace('#', '').toUpperCase();
        if(link.getAttribute('class') == 'text-logo'){   
            text = 'TRAVEL-SV'
        }
        navTextSelection.textContent = text;
    });

    navItems[index].addEventListener('mouseout', () => {
        navHover.classList.remove('active');
        navHover.classList.add('disable');
    });

    index++;

})



const banner = document.querySelector('.banner');

const links = document.querySelectorAll('a');
const container = document.querySelector('main');

const home = document.querySelector('#Home');
const buttons = document.querySelectorAll('.banner-btn')

const loaderImg = document.querySelectorAll('.loader-img > span')
const loader = document.querySelector('.loader-img');

const navHover = document.querySelector('.nav-hover');
const navItems = document.querySelectorAll('li');
const navTextSelection = document.querySelector('.nav-text-selection');

const imagenes =  [];





const activeLoader = ( ()=> {
    loader.style.display = 'flex'
    for (const span of loader.children) {
        span.classList.add('loading');   
        
        setTimeout( ()=>{ 
            span.classList.remove('loading');
            loader.style.display = 'none';
        }, 1500);
    }
});




/* Prototipo para el carusel de imagenes*/
let selectedItemCarousel = 0;
const addImgCarousel = ()=>{
    for(let i = 1;i <= 5; i++){
        let img = new Image();
        img.src = `./img/img-${i}.png`;
        imagenes.push(img);
    }
    home.style.backgroundImage = `url(${imagenes[selectedItemCarousel].src})`;
}

addImgCarousel();
buttons.forEach( btn => {

    btn.addEventListener('click', function () {

        if(this.getAttribute('id') == 'next'){
            selectedItemCarousel = (selectedItemCarousel == imagenes.length-1) ? 
                            0 : selectedItemCarousel+1;

            home.style.backgroundImage = `url(${imagenes[selectedItemCarousel].src})`;
        } else {

            selectedItemCarousel = (selectedItemCarousel == 0) ? 
                            imagenes.length : selectedItemCarousel;

            selectedItemCarousel--;
            home.style.backgroundImage = `url(${imagenes[selectedItemCarousel].src})`;    
        }

        activeLoader();
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

    // Se agreaga el evento mouseover, para los items del 
    // de la barra de navegacion
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



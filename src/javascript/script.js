const sectionMision = document.getElementById('section-mision')
const sectionVision = document.getElementById('section-vision')
const btnSectionAbout = document.querySelectorAll('.btn-section-about');

const home = document.querySelector('#Home');
const buttons = document.querySelectorAll('.btn-carousel-home')

const loaderImg = document.querySelectorAll('.loader-img > span')
const loader = document.querySelector('.loader-img');
const indicatorItemCarousel = document.querySelectorAll('.indicator-item');

const contactSection = document.getElementById('Contactanos');
const contactForm = document.querySelector('.container-contact');

const destinosSection = document.getElementById('Destinos');



const animateElements = (entries, className) => {
    entries.forEach((entry) => {
      const elements = entry.target.querySelectorAll(`.${className}`);
      if (entry.isIntersecting) {
        elements.forEach((element, index) => {
          element.style.transitionDelay = `${index * 0.2}s`;
          element.classList.add('show');
        });
      } else {
        elements.forEach((element) => {
          element.style.transitionDelay = '';
          element.classList.remove('show');
        });
      }
    });
  };
  
  const createAnimationObserver = (callback, ObjectObserve, className) => {
    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    });
    observer.observe(ObjectObserve);
  };
  
  const animationDestinySection = (entries) => {
    animateElements(entries, 'fade-in');
  };
  
  const animationContactSection = (entries) => {
    animateElements(entries, 'container-contact');
  };

  createAnimationObserver(animationDestinySection, destinosSection, 'fade-in');
  createAnimationObserver(animationContactSection, contactSection, 'container-contact');
  
btnSectionAbout.forEach(btn => {
    btn.addEventListener('click', () => {

        if (btn.getAttribute('class').includes('mision')) {
            sectionVision.classList.remove('active-section-about');
            sectionMision.classList.add('active-section-about');
        }

        if (btn.getAttribute('class').includes('vision')) {
            sectionMision.classList.remove('active-section-about');
            sectionVision.classList.add('active-section-about');

        }
    })
})



const imagenes =  [];
indicatorItemCarousel[0].style.backgroundColor = 'rgba(17, 17, 17, .5)';

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

const checkIndicatorCarousel = (index, length) => {
    const indicator = indicatorItemCarousel[index];
    indicator.style.backgroundColor ='#FFBC11';

    indicatorItemCarousel[( index != 0)? index-1 : length-1]
        .style.backgroundColor = 'rgba(17, 17, 17, .5)';


   indicatorItemCarousel[( index != length-1)? index+1 : 0]
        .style.backgroundColor = 'rgba(17, 17, 17, .5)';
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
        checkIndicatorCarousel(selectedItemCarousel, imagenes.length);
        activeLoader();
    })
});




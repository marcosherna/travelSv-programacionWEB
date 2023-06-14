const sectionMision = document.getElementById('section-mision')
const sectionVision = document.getElementById('section-vision')
const btnSectionAbout = document.querySelectorAll('.btn-section-about');

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

const home = document.querySelector('#Home');
const destinosSection = document.getElementById('Destinos');
const gallerySection = document.getElementById('Galeria')
const contactSection = document.getElementById('Contactanos');
const aboutSection = document.getElementById('About');

const sectionMision = document.getElementById('section-mision')
const sectionVision = document.getElementById('section-vision')
const btnSectionAbout = document.querySelectorAll('.btn-section-about');

const buttons = document.querySelectorAll('.btn-carousel-home')

const loaderImg = document.querySelectorAll('.loader-img > span')
const loader = document.querySelector('.loader-img');
const indicatorItemCarousel = document.querySelectorAll('.indicator-item');

const contactForm = document.querySelector('.container-contact');

// Obtén las referencias a los elementos del reloj


const clock = (date, element) => {
  const dayElement = element.querySelector('#day');
  const minutesElement = element.querySelector('#minutes');
  const hoursElement = element.querySelector('#hours');
  const secondsElement = element.querySelector('#seconds');
  // Actualiza el contenido del reloj cada segundo
  
  let dates = `${date}`.split('-')
  setInterval(() => {
    let proximo = new Date();
    proximo.setFullYear(dates[0]);
    proximo.setMonth(dates[1]); // 5 representa el mes de junio (enero es el mes 0)
    proximo.setDate(dates[2]);
    // Actualiza el día
    const day = proximo.toLocaleDateString('es-419', { weekday: 'long' });
    dayElement.textContent = day;

    // Actualiza los minutos
    const hours = proximo.getHours().toString().padStart(2, '0');
    hoursElement.textContent = hours;

    // Actualiza los minutos
    const minutes = proximo.getMinutes().toString().padStart(2, '0');
    minutesElement.textContent = minutes;

    // Actualiza los segundos
    const seconds = proximo.getSeconds().toString().padStart(2, '0');
    secondsElement.textContent = seconds;
  }, 1000);

}


const loadHome = () => {
  const proximoEvento = instance.data[1];
  home.querySelector('#titulo').textContent = proximoEvento.nombre;
  home.querySelector('#descripcion').textContent = proximoEvento.descripcion

  console.log(proximoEvento);
  clock(proximoEvento.fechaInicio, home)
  
  
}

loadHome()

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

const createAnimationObserver = (callback, ObjectObserve) => {
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

const animationGalerySection = (entries) => {
  animateElements(entries, 'gallery-item');
};

const animationAboutSection = (entries) => {
  animateElements(entries, 'fade-in');
};

const animationHomeSection = (entries) => {
  animateElements(entries, 'fade-in');
};

createAnimationObserver(animationDestinySection, destinosSection);
createAnimationObserver(animationContactSection, contactSection);
createAnimationObserver(animationGalerySection, gallerySection);
createAnimationObserver(animationAboutSection, aboutSection);
createAnimationObserver(animationHomeSection, home);

// botones de la seccion de about 
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



// seccion home
const imagenes = [];
indicatorItemCarousel[0].style.backgroundColor = 'rgba(17, 17, 17, .5)';

const activeLoader = (() => {
  loader.style.display = 'flex'
  for (const span of loader.children) {
    span.classList.add('loading');

    setTimeout(() => {
      span.classList.remove('loading');
      loader.style.display = 'none';
    }, 1500);
  }
});

/* Prototipo para el carusel de imagenes*/
let selectedItemCarousel = 0;
const addImgCarousel = () => {
  for (let i = 1; i <= 5; i++) {
    let img = new Image();
    img.src = `./img/img-${i}.png`;
    imagenes.push(img);
  }
  home.style.backgroundImage = `url(${imagenes[selectedItemCarousel].src})`;
}

const checkIndicatorCarousel = (index, length) => {
  
  const indicator = indicatorItemCarousel[index];
  indicator.style.backgroundColor = '#FFBC11';

  indicatorItemCarousel[(index != 0) ? index - 1 : length - 1]
    .style.backgroundColor = 'rgba(17, 17, 17, .5)';


  indicatorItemCarousel[(index != length - 1) ? index + 1 : 0]
    .style.backgroundColor = 'rgba(17, 17, 17, .5)';
}

addImgCarousel();
buttons.forEach(btn => {

  btn.addEventListener('click', function () {
    if (this.getAttribute('id') == 'next') {
      selectedItemCarousel = (selectedItemCarousel == imagenes.length - 1) ?
        0 : selectedItemCarousel + 1;

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



// section gallery
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach((item) => {
  const image = item.querySelector('img');
  const overlay = item.querySelector('.gallery-overlay');

  item.addEventListener('mouseover', () => {
    overlay.style.opacity = '1';
    image.style.transform = 'scale(1.05)';
    overlay.style.width = `${image.clientWidth}px`;
    overlay.style.height = `${image.clientHeight}px`;
    overlay.style.transform = 'scale(1.05)';
  });

  item.addEventListener('mouseout', () => {
    overlay.style.opacity = '0';
    image.style.transform = 'scale(1)';
  });
});


// cargamos los destinos

const carouselDestino = destinosSection.querySelector('.container-destinos .row')

// funcion para acotar el texto 
const textValidateLength = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }

  let _text = text.slice(0, maxLength).trim();
  return _text + '...';
};

const loadDestinos = () => {
  let destinos = Array.from(instance.data);
  carouselDestino.innerHTML = '';

  destinos.forEach(destino => {
    let descripcion = textValidateLength(destino.descripcion, 170);

    carouselDestino.innerHTML += `<div class="col-lg-4 d-lg-block mb-4 fade-in">
    <div class="card">
      <img src="./img/${destino.imgs[0]}" class="card-img-top" alt="Waterfall" />
        <div class="card-body">
          <h5 class="card-title">${destino.nombre}</h5>
          <p class="card-text">${descripcion}</p>
          <button type="button" class="btn btn-primary"           data-bs-toggle="modal"
            data-bs-target="#detalleDestino">Detalle</button>
        </div>
    </div>
  </div>`;
  })
}


loadDestinos()



const alertContainer = document.getElementById('alertContainer');
const reserveButton = document.querySelector('.btn-outline-primary');

const modal = document.querySelector('#detalleDestino');
const closeButton = modal.querySelector('.btn-close');

const reserveButtons = modal.querySelectorAll('.btn');


const btnsDesatalleDestinos = document.querySelectorAll('.card-body button');

// Agrega el evento de clic a cada botón
btnsDesatalleDestinos.forEach((button, index) => {

  const selectedDestination = instance.data[index]
  button.addEventListener('click', () => {
    modal.querySelector('#nombre').textContent = selectedDestination.nombre;
    modal.querySelector('#descripcion').textContent = selectedDestination.descripcion;


    const paquetes = Array.from(selectedDestination.paquetes);
    const rowPaquetes = modal.querySelector('.paquetes');
    rowPaquetes.innerHTML = '';
    paquetes.forEach(paquete => {

      const liCaracteristicas = (caracteristicas) => {
        caracteristicas = Array.from(caracteristicas);
        let liHtmll = ''
        caracteristicas.forEach(c => liHtmll = liHtmll + `<li>${c}</li>`)
        return liHtmll;
      }
      rowPaquetes.innerHTML += `<div class="col-lg-4 d-lg-block mb-4 ">
      <div class="card mb-4 h-100">
        <!-- Contenido de la tarjeta basico -->
        <div class="card-header">
          <h4 class="my-0 font-weight-normal">${paquete.tipo}</h4>
        </div>
        <div class="card-body  d-flex flex-column">
          <h1 class="card-title pricing-card-title">$${paquete.precio}</h1>
          <ul class="list-unstyled mt-3 mb-4">
            ${liCaracteristicas(paquete.caracteristicas)}
          </ul>
          <button type="button"
            class="btn btn-lg btn-block btn-outline-primary mt-auto">Reservar</button>
        </div>
      </div>
    </div>`

    })
  });
});


const showAlert = (message, duration) => {
  // Crear el elemento de la alerta
  const alert = document.createElement('div');
  alert.classList.add('alert', 'alert-warning', 'fade', 'show');
  alert.setAttribute('role', 'alert');
  alert.textContent = message;

  // Agregar la alerta al contenedor
  alertContainer.appendChild(alert);

  // Remover la alerta después de 'duration' segundos
  setTimeout(() => {
    setTimeout(() => {
      alertContainer.removeChild(alert);
    }, 500);
  }, duration * 1000);
}

// cuando se presiona reservar dentro de el modal
reserveButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const bootstrapModal = bootstrap.Modal.getInstance(modal);
    bootstrapModal.hide(); // cierra el modal

    //validamos si la alerte esta en pantalla
    let isExistAlert = alertContainer.querySelector('.alert')
    if (!isExistAlert) {
      showAlert('Tienes que iniciar seccion primero', 5);
    }
  });
})


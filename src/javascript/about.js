const btnsAbout = document.querySelectorAll('.btn')
const sectionsAbout = document.querySelectorAll('.section-about');
const containerScroll = document.getElementById('About');


btnsAbout.forEach( btn => {
    btn.addEventListener('click', (event) => {
        event.preventDefault();
        let ref = btn.parentElement.parentElement.parentElement;
        let index = Array.from(sectionsAbout).indexOf(ref)


        containerScroll.scrollTo({
            left: sectionsAbout[index].offsetLeft,
            behavior:'smooth',
        })
    })
})


/*
link.addEventListener('click', (event) => {
    event.preventDefault();

    let href = link.getAttribute('href');
    let section = document.querySelector(href);
    container.scrollTo({
        left: section.offsetLeft,
        behavior: 'smooth'
    });
});*/
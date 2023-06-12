const sectionMision = document.getElementById('section-mision')
const sectionVision = document.getElementById('section-vision')
const btnSectionAbout = document.querySelectorAll('.btn-section-about');

btnSectionAbout.forEach( btn => {
    btn.addEventListener('click', ()=>{

        if(btn.getAttribute('class').includes('mision')){
            sectionVision.classList.remove('active-section-about');
            sectionMision.classList.add('active-section-about');
        }
        
        if(btn.getAttribute('class').includes('vision')){
            sectionMision.classList.remove('active-section-about');
            sectionVision.classList.add('active-section-about');
            
        }
    })
})

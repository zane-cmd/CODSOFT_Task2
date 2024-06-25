

AOS.init();

function scrollToSection(sectionId) {
    document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
}

document.querySelectorAll('.hero-button').forEach((button)=>{
  button.addEventListener('click',()=>{
    if(button.innerHTML==='Products'){
        sectionId='#products';
    }
    else{
        sectionId='#contactUs';
    }

    scrollToSection(sectionId);
   
  })
});

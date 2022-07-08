const hamburger = document.getElementById('hamburger');
const closeUp = document.getElementById('close');
const mobileNav = document.querySelector('.ruly-mobile');
const ever = document.querySelector('.aya')


const showNav = () => {
    hamburger.classList.toggle('remove')
    closeUp.classList.toggle('visible')
    mobileNav.classList.toggle('visible')

}



ever.addEventListener('click', showNav)
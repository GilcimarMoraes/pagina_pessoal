/*=== MOSTRAR MENU ===*/

const   navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close');

/*=== verificar se variavel existe ===*/
if (navToggle) {
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== REMOVER MENU DISPOSITIVOS MOVEIS =====*/
const navLink = document.getElementById('nav__link')

const linkAction = () =>{
/*=== fechar menu com o clique fora do menu ===*/
navMenu.classList.remove(show-menu)
}
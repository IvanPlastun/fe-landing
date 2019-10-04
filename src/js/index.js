// Импорт js-модулей
const burgerMenu = document.querySelector('#burger-menu')

function activeMenu () {
    const lineTop = document.querySelector('#line-top')
    const lineMiddle = document.querySelector('#line-middle')
    const lineBottom = document.querySelector('#line-bottom')
    const overlay = document.querySelector('#overlay')

    lineTop.classList.toggle('header-nav-burger__line--top-active')
    lineMiddle.classList.toggle('header-nav-burger__line--middle-active')
    lineBottom.classList.toggle('header-nav-burger__line--bottom-active')
    overlay.classList.toggle('header-nav-overlay--open')

    document.body.classList.toggle('locked')
}

burgerMenu.addEventListener('click', activeMenu)
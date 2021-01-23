import { showAside , hiddeAside } from './aside/aside.js'

const $hamburger = document.querySelector('.header__hamburger')
const $close = document.querySelector('.aside_header__close')


export const aside = ()=>{
    $hamburger.addEventListener('click', showAside)
    $close.addEventListener('click' , hiddeAside)
}



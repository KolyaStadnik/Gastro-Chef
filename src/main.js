import './style.css'
import './main.scss'
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const burger = document.querySelector('#burger')
const mobileContainer = document.querySelector('#mobile-container')
const body = document.querySelector('body')

burger.addEventListener('click', ()=> {
    burger.classList.toggle('is-active')
    mobileContainer.classList.toggle('hidden')
    body.classList.toggle('overflow-hidden') 
})

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 4,
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

const network = document.querySelector('#social-networks-button')
const social = document.querySelector('#social-networks-panel')
const passivenetworks = document.querySelector('#passive-networks')
const activenetworks = document.querySelector('#active-networks')

network.addEventListener('click', ()=> {
  social.classList.toggle('hidden')
  activenetworks.classList.toggle('hidden')
  passivenetworks.classList.toggle('hidden')
})
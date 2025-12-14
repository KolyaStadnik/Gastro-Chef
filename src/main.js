import './style.css'
import './main.scss'
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const burger = document.querySelector('#burger')
const mobileContainer = document.querySelector('#mobile-container')
const body = document.querySelector('body')

burger.addEventListener('click', () => {
    burger.classList.toggle('is-active')
    mobileContainer.classList.toggle('hidden')
    body.classList.toggle('overflow-hidden')
})

const swiper = new Swiper('.swiper', {
    loop: true,
    speed: 500,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,

        renderBullet: function (index, className) {
            return `
            <div class="${className} flex justify-center items-center cursor-pointer">
                <svg viewBox="0 0 14 14" class="bullet-svg">
                    <circle class="outer" r="5" cx="50%" cy="50%" fill="transparent" stroke="var(--color-green-400)" stroke-width="2"></circle>
                    <circle class="inner" r="5" cx="50%" cy="50%" fill="transparent" stroke="var(--color-blue-200)" stroke-width="2" stroke-dasharray="31.4" stroke-dashoffset="31.4"></circle>
                </svg>
            </div>`;
        }
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const languageItem = document.querySelectorAll('.language-item')

function remuveActiveClassesLanguagePanel() {
    languageItem.forEach(function (item) {
        item.classList.remove('bg-green-400')
        item.classList.remove('text-blue-300')
    })
}

languageItem.forEach(function (element) {
    element.addEventListener('click', function (event) {
        event.preventDefault()
        remuveActiveClassesLanguagePanel()
        element.classList.add('bg-green-400')
        element.classList.add('text-blue-300')
    })
})

const categorylink = document.querySelectorAll('.category-link')

function remuveActiveClassesNavigationPanel() {
    categorylink.forEach(item => {
        item.classList.add('xl:w-17.5')
        item.classList.add('w-10')
        item.classList.remove('md:w-auto')
        item.classList.remove('text-green-400')
        item.querySelector('span').classList.add('md:hidden')
    })
}

categorylink.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault()
        remuveActiveClassesNavigationPanel()
        item.classList.remove('xl:w-17.5')
        item.classList.remove('w-10')
        item.classList.add('md:w-auto')
        item.classList.add('text-green-400')
        item.querySelector('span').classList.remove('md:hidden')
    })
})

// const link = document.querySelector('.category-link')

// categorylink.forEach(item => {
//     document.addEventListener('click', (event) => {
//         const withinBoundaries = event.composedPath().includes(link)

//         if (!withinBoundaries) {
//             remuveActiveClassesNavigationPanel()
//         }
//     })

// })

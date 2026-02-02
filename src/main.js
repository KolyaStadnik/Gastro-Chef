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
                    <circle class="outer" r="4" cx="50%" cy="50%" fill="transparent" stroke="var(--color-green-400)" stroke-width="2"></circle>
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
//});

const network = document.querySelector('#social-networks-button')
const social = document.querySelector('#social-networks-panel')
const passivenetworks = document.querySelector('#passive-networks')
const activenetworks = document.querySelector('#active-networks')

network.addEventListener('click', () => {
    social.classList.toggle('hidden')
    activenetworks.classList.toggle('hidden')
    passivenetworks.classList.toggle('hidden')
})


const btnTabs = document.querySelectorAll('[data-content-id]')
const tabsContent = document.querySelectorAll('.tab-content')


function removeActiveNavTabs() {
    tabsContent.forEach(function (content) {
        content.classList.remove('show')
    })
    btnTabs.forEach(function (btn) {
        btn.classList.remove('active')
    })
}

btnTabs.forEach(function (btn) {
    btn.addEventListener('click', function () {
        removeActiveNavTabs()
        btn.classList.add('active')
        const id = btn.getAttribute('data-content-id')
        const content = document.getElementById(id)
        content.classList.add('show')
    })
})


// const installAccordion = () => {
//     const accordion = document.querySelector('#accordion')

//     accordion.addEventListener('click', (event)=> {
//         const accordionQuestion = event.target.closest('.accordion-question')
//         if (!accordionQuestion) return
//         const accordionItem = accordionQuestion.closest('.accordion-item')
//         const accordionAnswer = accordionItem.querySelector('.accordion-answer')
//         accordionQuestion.classList.toggle('accordion-question_active')
//         accordionAnswer.classList.toggle('hidden')
//     })
// }

// installAccordion ()

const installAccordion = () => {
    const accordion = document.querySelector('#accordion');
    if(!accordion) return;

    const closeAll = () => {
        accordion.querySelectorAll('.accordion-question_active').forEach(question => {
            question.classList.remove('accordion-question_active');
            const item = question.closest('.accordion-item');
            const answer = item?.querySelector('.accordion-answer');
            if (answer) answer.classList.add('hidden');
        });
    };

    accordion.addEventListener('click', (event) => {
        const question = event.target.closest('.accordion-question');
        if (!question) return;

        const item = question.closest('.accordion-item');
        const answer = item?.querySelector('.accordion-answer');
        if (!answer) return;

        const isAlreadyOpen = question.classList.contains('accordion-question_active');

        closeAll ();

        if (!isAlreadyOpen) {
            question.classList.add('accordion-question_active');
            answer.classList.remove('hidden');
        }
    });
};


installAccordion ()



// const installAccordion = ()=> {
//     const accordionQuestion = document.querySelectorAll('.accordion-question')

//     accordionQuestion.forEach(question =>{
//         question.addEventListener('click', ()=>{
//             const accordionItem = question.closest('.accordion-item')
//             const accordionAnswer = accordionItem.querySelector('.accordion-answer')
//             question.classList.toggle('accordion-question_active')
//             accordionAnswer.classList.toggle('hidden')
//         })
//     })
// }

// installAccordion ()

// const qwerty = document.getElementById('content-1')

// const programsArr = [
//     {
//         express_fit
//     },
//     {
//         slim
//     },
//     {
//         fitness: [
//             {
//                 discription: {
//                     title: 'fitnes',
//                     kcal: '1300',
//                     content: 'Программа здорового питания Express Fit. Идеально для: похудения в кратчайшие сроки, повышения энергии и сил, снижения веса при сидячем образе жизни.',
//                     price_list: {
//                         test_day: {
//                             old_price: '510',
//                             price: '357'
//                         },
//                         day_1: {
//                             old_price: false,
//                             price: '510'
//                         },
//                         day_7: {
//                             old_price: '510',
//                             price: '490'
//                         },
//                         day_14: {
//                             old_price: '510',
//                             price: '470'
//                         },
//                         day_30: {
//                             old_price: '510',
//                             price: '445'
//                         },
//                         breakfest_and_dinner: {
//                             old_price: '-15%',
//                             price: '433'
//                         },
//                     }
//                 },
//                 week: [
//                     {
//                         mon: {
//                             eating: [
//                                 {
//                                     eating_title: 'Завтрак',
//                                     eating_time: '7:00 - 9:00',
//                                     eating_menu: [
//                                         {
//                                             menu_item: [
//                                                 {
//                                                     item_title: '- Фриттата с сыром и кабачками',
//                                                     item_quantily: '170гр'
//                                                 }
//                                             ]
//                                         }
//                                     ]
//                                 },
//                                 {
//                                     eating_title: '2-й завтрак',
//                                     eating_time: '10:00 - 12:00',
//                                     eating_menu: [
//                                         {
//                                             menu_item: [
//                                                 {
//                                                     item_title: '- Фермерский йогурт',
//                                                     item_quantily: '200гр'
//                                                 },
//                                                 {
//                                                     item_title: '- Полезное печенье из сухофруктов и орехов',
//                                                     item_quantily: '2 шт'
//                                                 }
//                                             ]
//                                         }
//                                     ]
//                                 },
//                                 {
//                                     eating_title: 'Обед',
//                                     eating_time: '13:00 - 15:00',
//                                     eating_menu: [
//                                         {
//                                             menu_item: [
//                                                 {
//                                                     item_title: '- Люля-кебаб из индейки',
//                                                     item_quantily: '100гр'
//                                                 },
//                                                 {
//                                                     item_title: '- Летний салат с маслинами и сыром',
//                                                     item_quantily: '100гр'
//                                                 }
//                                             ]
//                                         }
//                                     ]
//                                 },
//                                 {
//                                     eating_title: 'Полдник',
//                                     eating_time: '16:00 - 17:30',
//                                     eating_menu: [
//                                         {
//                                             menu_item: [
//                                                 {
//                                                     item_title: '- Творожное суфле с какао и вишей',
//                                                     item_quantily: '100гр'
//                                                 }
//                                             ]
//                                         }
//                                     ]
//                                 },
//                                 {
//                                     eating_title: 'Ужин',
//                                     eating_time: '19:00 - 20:00',
//                                     eating_menu: [
//                                         {
//                                             menu_item: [
//                                                 {
//                                                     item_title: '- Рыбный терен',
//                                                     item_quantily: '100гр'
//                                                 },
//                                                 {
//                                                     item_title: '- Овощи гриль',
//                                                     item_quantily: '150гр'
//                                                 }
//                                             ]
//                                         }
//                                     ]
//                                 },
//                             ],
//                         },
//                         tue: {

//                         },
//                         wed: {

//                         },
//                         thu: {

//                         },
//                         fri: {

//                         },
//                         sat: {

//                         },
//                         sun: {

//                         },
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         balance
//     },
//     {
//         balance_plus
//     },
//     {
//         strong
//     },
//     {
//         maxi_fit
//     },
// ]


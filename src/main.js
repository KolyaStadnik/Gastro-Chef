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

const swiperCarusel = new Swiper(".mySwiper", {
  loop: true,
  speed: 3000,
  allowTouchMove: true,
  slidesPerView: 'auto',
  spaceBetween: 0,
  centeredSlides: false,
  
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  
  freeMode: {
    enabled: true,
    momentum: false,
  },
  
  loopedSlides: 6,     
});

const languageItem = document.querySelectorAll('.language-item')

const swiperBlog = new Swiper('.swiperBlog', {
    loop: true,
    speed: 500,
    pagination: {
        el: '.swiper-pagination-top',
        clickable: true,
        renderBullet: function (index, className) {
            return `<span class="${className}">${index + 1}</span>`;
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        init: function () {
            const paginationHTML = document.querySelector('.swiper-pagination-top').innerHTML;
            const bottomPagination = document.querySelector('.swiper-pagination-bottom');
            if (bottomPagination) {
                bottomPagination.innerHTML = paginationHTML;
            }
        },
        slideChange: function () {
            const activeIndex = this.realIndex;
            const bottomBullets = document.querySelectorAll('.swiper-pagination-bottom .swiper-pagination-bullet');
            bottomBullets.forEach((bullet, idx) => {
                if (idx === activeIndex) {
                    bullet.classList.add('swiper-pagination-bullet-active');
                } else {
                    bullet.classList.remove('swiper-pagination-bullet-active');
                }
            });
        }
    }
});

document.querySelector('.swiper-pagination-bottom').addEventListener('click', (e) => {
    if (e.target.classList.contains('swiper-pagination-bullet')) {
        const bullets = Array.from(e.target.parentElement.children);
        const index = bullets.indexOf(e.target);
        swiperBlog.slideToLoop(index);
    }
});


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

const categorylinks = document.querySelectorAll('.category-link');

function removeActiveClassesNavigationPanel() {
    categorylinks.forEach(item => {
        item.classList.remove('text-green-400');
        if (window.innerWidth >= 768) {
            item.classList.add('w-10', 'xl:w-17.5');
            item.classList.remove('md:w-auto');
            const span = item.querySelector('span');
            if (span) span.classList.add('md:hidden');
        }
    });
}

categorylinks.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        removeActiveClassesNavigationPanel();
        item.classList.add('text-green-400');
        if (window.innerWidth >= 768) {
            item.classList.remove('w-10', 'xl:w-17.5');
            item.classList.add('md:w-auto');
            const span = item.querySelector('span');
            if (span) span.classList.remove('md:hidden');
        }
    });
});

document.addEventListener('click', (event) => {
    if (!event.target.closest('.category-link')) {
        removeActiveClassesNavigationPanel();
    }
});

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

const installProgramsTabs = () => {
    const setupTabs = (btnSelector, contentSelector, btnActiveClass, contentActiveClass, dataAttr) => {
        const buttons = document.querySelectorAll(btnSelector);
        const contents = document.querySelectorAll(contentSelector);

        if (buttons.length === 0) return;

        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                buttons.forEach(b => b.classList.remove(btnActiveClass));
                contents.forEach(c => c.classList.remove(contentActiveClass));

                btn.classList.add(btnActiveClass);
                const id = btn.getAttribute(dataAttr);
                const targetContent = document.getElementById(id);

                if (targetContent) {
                    targetContent.classList.add(contentActiveClass);
                }
            });
        });
    };
    setupTabs('[data-target-programs]', '.tab-content', 'btn-active', 'program-active', 'data-target-programs'); 

    setupTabs('[data-target-ccal-programs]', '.program-tab-content', 'btn-active__ccal-programs', 'program-active__ccal', 'data-target-ccal-programs');

    setupTabs('[data-target-week-programs]', '.program-tab-content', 'btn-active__week-programs', 'program-active__week', 'data-target-week-programs');

    setupTabs('[data-target-ccal-special]', '.special-tab-content', 'btn-active__ccal-special', 'special-active__ccal', 'data-target-ccal-special');
    
    setupTabs('[data-target-week-special]', '.special-tab-content', 'btn-active__week-special', 'special-active__week', 'data-target-week-special');
};

document.querySelectorAll('.tabs').length > 0 ? installProgramsTabs() : null



// const installProgramsTabs = () => {
//     const btnTabs = document.querySelectorAll('[data-target-programs]')
//     const btnNavPrograms = document.querySelectorAll('[data-target-ccal-programs]')
//     const btnWeekPrograms = document.querySelectorAll('[data-target-week-programs]')
//     const btnNavSpecial = document.querySelectorAll('[data-target-ccal-special]')
//     const btnWeekSpecial = document.querySelectorAll('[data-target-week-special]')
//     const tabsContent = document.querySelectorAll('.tab-content')
//     const tabsContentCcalProgram = document.querySelectorAll('.program-tab-content')
//     const tabsContentWeekProgram = document.querySelectorAll('.program-tab-content')
//     const tabsContentCcalSpecial = document.querySelectorAll('.special-tab-content')
//     const tabsContentWeekSpecial = document.querySelectorAll('.special-tab-content')

//     function removeActiveNavTabs() {
//         tabsContent.forEach(function (content) {
//             content.classList.remove('program-active')
//         })
//         btnTabs.forEach(function (btn) {
//             btn.classList.remove('btn-active')
//         })
//     }

//     btnTabs.forEach(function (btn) {
//         btn.addEventListener('click', function () {
//             removeActiveNavTabs()
//             btn.classList.add('btn-active')
//             const id = btn.getAttribute('data-target-programs')
//             const content = document.getElementById(id)
//             content.classList.add('program-active')
//         })
//     })

//     function removeActiveContentBoxPrograms() {
//         tabsContentCcalProgram.forEach(function (tabsContent) {
//             tabsContent.classList.remove('program-active__ccal')
//         })
//         btnNavPrograms.forEach(function (btnNavPrograms) {
//             btnNavPrograms.classList.remove('btn-active__ccal-programs')
//         })
//     }

//     btnNavPrograms.forEach(function ( btnNavPrograms) {
//          btnNavPrograms.addEventListener('click', function () {
//             removeActiveContentBoxPrograms()
//              btnNavPrograms.classList.add('btn-active__ccal-programs')
//             const id = btnNavPrograms.getAttribute('data-target-ccal-programs')
//             const content = document.getElementById(id)
//             content.classList.add('program-active__ccal')
//         })
//     })

//     function removeActiveContentWeekPrograms() {
//         tabsContentWeekProgram.forEach(function (tabsContentWeekProgram) {
//             tabsContentWeekProgram.classList.remove('program-active__week')
//         })
//         btnWeekPrograms.forEach(function (btnWeekPrograms) {
//             btnWeekPrograms.classList.remove('btn-active__week-programs')
//         })
//     }

//     btnWeekPrograms.forEach(function (btnWeekPrograms) {
//         btnWeekPrograms.addEventListener('click', function () {
//             removeActiveContentWeekPrograms()
//             btnWeekPrograms.classList.add('btn-active__week-programs')
//             const id = btnWeekPrograms.getAttribute('data-target-week-programs')
//             const content = document.getElementById(id)
//             content.classList.add('program-active__week')
//         })
//     })

//     function removeActiveContentBoxSpecial() {
//         tabsContentCcalSpecial.forEach(function (tabsContentCcalSpecial) {
//             tabsContentCcalSpecial.classList.remove('special-active__ccal')
//         })
//         btnNavSpecial.forEach(function (btnWeekSpecial) {
//             btnWeekSpecial.classList.remove('btn-active__ccal-special')
//         })
//     }

//     btnNavSpecial.forEach(function (btnNavSpecial) {
//         btnNavSpecial.addEventListener('click', function () {
//             removeActiveContentBoxSpecial()
//             btnNavSpecial.classList.add('btn-active__ccal-special')
//             const id = btnNavSpecial.getAttribute('data-target-ccal-special')
//             const content = document.getElementById(id)
//             content.classList.add('special-active__ccal')
//         })
//     })

//     function removeActiveContentWeekSpecial() {
//         tabsContentWeekSpecial.forEach(function (tabsContentWeekSpecial) {
//             tabsContentWeekSpecial.classList.remove('special-active__week')
//         })
//         btnWeekSpecial.forEach(function (btnWeekSpecial) {
//             btnWeekSpecial.classList.remove('btn-active__week-special')
//         })
//     }

//     btnWeekSpecial.forEach(function (btnWeekSpecial) {
//         btnWeekSpecial.addEventListener('click', function () {
//             removeActiveContentWeekSpecial()
//             btnWeekSpecial.classList.add('btn-active__week-special')
//             const id = btnWeekSpecial.getAttribute('data-target-week-special')
//             const content = document.getElementById(id)
//             content.classList.add('special-active__week')
//         })
//     })
// }

// (document.querySelectorAll('.tabs').length > 0) ? installProgramsTabs() : null



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

const installControlInputs = () => {
    const cheackbox = document.querySelectorAll('[type="checkbox"]')
const radioButton = document.querySelectorAll('[type="radio"]')

const creatControlModifire = (selector) => {
    selector.forEach(control => {
    const wrapper = control.closest('.input-box')
    if(!wrapper) return
    wrapper?.classList.add('input-box_control')
})
}

creatControlModifire(cheackbox)
creatControlModifire(radioButton)
}

(document.querySelectorAll('[type="checkbox"]').length > 0) || (document.querySelectorAll('[type="radio"]').length > 0) ? installControlInputs() : null



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


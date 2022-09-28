'use strict';

let swiper = {
  destroyed: true
};

function onWindowResize () {
  const clientWidth = document.body.clientWidth;

  if (clientWidth < 768 && swiper.destroyed) {
    swiper = new Swiper(".swiper", {
      grabCursor: true,
      slidesPerView: 1.2,
      spaceBetween: 15,
    
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    
    });
    return;
  }

  if (clientWidth >= 768 && !swiper.destroyed) {
    swiper.destroy();
    return;
  }
};


onWindowResize();

window.addEventListener('resize', () => {
  onWindowResize();
});


const showBtn = document.querySelector('.content-button');
const slider = document.querySelector('.slider');


function btnToggle (btn, wrapper) {
  const btnText = btn.querySelector('span');
  const btnImg = btn.querySelector('img');

  btn.addEventListener('click', () => {
    wrapper.classList.toggle('slider--show-all');
    btnText.textContent = slider.classList.contains('slider--show-all') ? 'Скрыть' : 'Показать все';
    btnImg.classList.toggle('content-button__img--show-all');
  })
};

btnToggle(showBtn, slider);
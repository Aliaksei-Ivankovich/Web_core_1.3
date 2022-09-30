'use strict';

addEventListener('DOMContentLoaded', () => {

  let swiper;
  
  function onWindowResize () {
    const tablet = window.matchMedia('(min-width: 768px)');
  
    if (!tablet.matches) {
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
  
    if (tablet.matches && swiper) {
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

    btn.addEventListener('click', (e) => {
      wrapper.classList.toggle('slider--show-all');
      e.currentTarget.children[1].textContent = wrapper.classList.contains('slider--show-all') ? 'Скрыть' : 'Показать все';
      e.currentTarget.children[0].classList.toggle('content-button__img--show-all');
    })
  };
  
  btnToggle(showBtn, slider);
});

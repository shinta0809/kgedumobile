document.addEventListener('DOMContentLoaded', () => {
  initHeroSwiper();
  initCourseSwiper();
});

function initHeroSwiper() {
  const el = document.querySelector('.hero-swiper');
  if (!el || typeof Swiper === 'undefined') return;

  new Swiper(el, {
    loop: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.hero-pagination',
      clickable: true,
    },
  });
}

function initCourseSwiper() {
  const el = document.querySelector('.course-swiper');
  if (!el || typeof Swiper === 'undefined') return;

  new Swiper(el, {
    slidesPerView: 1.05,
    spaceBetween: 12,
    loop: true,
    navigation: {
      nextEl: '.course-next',
      prevEl: '.course-prev',
    },
    breakpoints: {
      480: { slidesPerView: 1.2 },
      600: { slidesPerView: 1.35 },
    },
  });
}

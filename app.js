$(function () {
  initHeroSwiper();
  initCourseSwiper();
});

function initHeroSwiper() {
  const $el = $(".hero-swiper");
  if (!$el.length || typeof Swiper === "undefined") return;

  new Swiper($el[0], {
    loop: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".hero-pagination",
      clickable: true,
    },
  });
}

function initCourseSwiper() {
  const $el = $(".course-swiper");
  if (!$el.length || typeof Swiper === "undefined") return;

  new Swiper($el[0], {
    slidesPerView: 1.05,
    spaceBetween: 12,
    loop: true,
    navigation: {
      nextEl: ".course-next",
      prevEl: ".course-prev",
    },
    breakpoints: {
      480: { slidesPerView: 1.2 },
      600: { slidesPerView: 1.35 },
    },
  });
}

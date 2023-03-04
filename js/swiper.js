const windowSize = window.innerWidth;
const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: {
    // 5秒ごとにスライド
    delay: 5000,
    // 最後のスライドまで行くと最初のスライドに戻って再生し続ける
    stopOnLastSlide: false,
    // ユーザーがスライダーを操作した後も自動再生し続ける
    disableOnInteraction: false,
    // 最初のスライドから順に再生する
    reverseDirection: false,
    // ホバー時は止まる
    pauseOnMouseEnter: true,
  },
  slidesPerView: 1.5,
  breakpoints: {
    768: {
      slidesPerView: 3.5,
    },
    1280: {
      spaceBetween: 56,
      slidesPerView: 3.9,
    },
    1500: {
      spaceBetween: 56,
      slidesPerView: 4.5,
    },
    1800: {
      spaceBetween: 56,
      slidesPerView: 5.5,
    },
  },
  spaceBetween: 36,
  centeredSlides: true,
});

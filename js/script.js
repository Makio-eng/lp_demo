const gnav = document.querySelector('.gnav');
const button = document.querySelector('.burger-btn');
const overLay = document.querySelector('.overlay');
const body = document.querySelector('body');
const gnavLinks = document.querySelectorAll('.gnav__link');

const toggleMenu = () => {
  gnav.classList.toggle('menu-open');
  button.classList.toggle('btn-open');
  overLay.classList.toggle('overlay-open');
  body.classList.toggle('no-scroll');
};

button.addEventListener('click', () => {
  toggleMenu();
});
overLay.addEventListener('click', () => {
  toggleMenu();
});

// スクロールアニメーション起動
AOS.init();

// スムーススクロール
gnavLinks.forEach((gnavLink) => {
  gnavLink.addEventListener('click', (e) => {
    e.preventDefault();
    let href = gnavLink.getAttribute('href');
    let targetElement = document.getElementById(href.replace('#', ''));
    const rect = targetElement.getBoundingClientRect().top;
    const offset = window.pageYOffset;
    let header_H = document.getElementById('header').clientHeight;
    const target = rect + offset - header_H;
    window.scrollTo({
      top: target,
      behavior: 'smooth',
    });

    // ハンバーガーメニューからクリック時は暗転とスクロールロック解除
    if (gnav.classList.contains('menu-open')) {
      toggleMenu();
    }
  });
});

// アコーディオンメニュー
const labels = document.querySelectorAll('.menu-item__label');

labels.forEach((label) => {
  label.addEventListener('click', function (event) {
    const label = event.currentTarget;
    if (label.dataset.isOpen === 'false') {
      // 対象の要素（.Menu-Item__Innerと.Menu-Item-text）を取得する
      const itemInner = label.nextElementSibling;
      const content = itemInner.children[0];

      // コンテンツ内側の要素の高さを取得する
      const targetHight = content.offsetHeight;

      // コンテンツ外側に、内側要素の高さを設定する。ここでtransitionによるアニメーションが作動する。
      itemInner.style.height = targetHight + 'px';

      // transition時に指定した秒数分遅らせて、アニメーション完了後にheightをautoにする。
      // data属性も変更する。
      setTimeout(function () {
        itemInner.style.targetHight = 'auto';
        label.dataset.isOpen = 'true';
      }, 500);
    }
    if (label.dataset.isOpen === 'true') {
      // 対象の要素（.Menu-Item__Innerと.Menu-Item-text）を取得する
      const itemInner = label.nextElementSibling;
      const content = itemInner.children[0];

      // コンテンツ内側の要素の高さを取得する
      const targetHight = content.offsetHeight;
      // コンテンツ外側(高さauto)に、内側要素の高さを設定する。
      itemInner.style.height = targetHight + 'px';

      setTimeout(function () {
        // 高さを0にする。ここでアニメーションが作動する。
        itemInner.style.height = 0;
        label.dataset.isOpen = 'false';
      }, 1);
    }
  });
});

// フォーム・必須チェック
const submitBtn = document.getElementById('js-submit');
const inputs = document.querySelectorAll('.form-input');

inputs.forEach((inPut) => {
  inPut.addEventListener('change', emptyCheck);
});
function emptyCheck() {
  if (
    !inputs[0].value == '' &&
    !inputs[1].value == '' &&
    !inputs[2].value == '' &&
    inputs[3].checked &&
    !submitBtn.classList.contains('btn--submit')
  ) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}




import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs';
import { tiger } from './../utils/tiger.js';
import { getNode, getNodes } from './getNode.js';
import { addClass } from './css.js';
import { insertLast } from './insert.js';

async function Main() {
  const { data } = await tiger.get('http://localhost:3000/main');

  // 메인 배너 스와이퍼

  data.banner.forEach((item) => {
    const swipperWrapper = getNode('.banner__slider > .swiper-wrapper');

    const swipperItem = document.createElement('div');
    addClass(swipperItem, 'swiper-slide');

    const itemImage = document.createElement('img');

    itemImage.src = item.image.banner;
    itemImage.alt = item.image.alt;
    itemImage.style.objectFit = 'cover';

    swipperItem.append(itemImage);

    swipperWrapper.append(swipperItem);
  });

  // 이 상품 어때요 스와이퍼

  data.products.forEach((item) => {
    const swipperWrapper = getNode('.recommend__slider > .swiper-wrapper');

    const swipperItem = document.createElement('div');
    addClass(swipperItem, 'swiper-slide');

    const itemImage = document.createElement('img');
    itemImage.src = item.image.thumbnail;
    itemImage.alt = item.image.alt;
    itemImage.style.objectFit = 'cover';
    itemImage.style.width = '240px';

    swipperItem.append(itemImage);

    swipperWrapper.append(swipperItem);

    const template = `
    <button>
    <img src="./assets/images/main/ic-add-cart.svg" />
  </button>
      `;
    insertLast(swipperItem, template);
  });

  // 메인 배너

  const swiper = new Swiper('.banner__slider', {
    speed: 400,
    spaceBetween: 100,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // 이 상품 어때요

  let loopCounter = 0; // Loop 횟수
  const maxLoop = 2;

  const recommendSwiper = new Swiper('.recommend__slider', {
    speed: 400,
    spaceBetween: 10,
    // loop: true,
    slidesPerView: 4,
    slidesPerGroup: 4,
    // slideoffsetBefore: 100,
    // siideoffsetAfter: 100,
    navigation: {
      prevEl: '.swiper-button-prev.recommend__button__prev',
      nextEl: '.swiper-button-next.recommend__button__next',
    },
  });
}

Main();

// 이 상품 어때요 버튼 숨김 함수

function clickButton() {
  const recommendBannerPrevbtn = document.querySelector('.recommend__button__prev');
  const recommendBannerNextbtn = document.querySelector('.recommend__button__next');

  recommendBannerNextbtn.addEventListener('click', () => {
    recommendBannerPrevbtn.style.display = 'block';
    recommendBannerNextbtn.style.display = 'none';
  });

  recommendBannerPrevbtn.addEventListener('click', () => {
    recommendBannerNextbtn.style.display = 'block';
    recommendBannerPrevbtn.style.display = 'none';
  });
}
clickButton();

import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs';
import { tiger } from './../utils/tiger.js';
import { getNode } from './getNode.js';
import { addClass } from './css.js';

async function Main() {
  const { data } = await tiger.get('http://localhost:3000/main');

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

  data.products.forEach((item) => {
    const swipperWrapper = getNode('.recommend__slider > .swiper-wrapper');

    const swipperItem = document.createElement('div');
    addClass(swipperItem, 'swiper-slide');

    const itemImage = document.createElement('img');
    itemImage.src = item.image.thumbnail;
    itemImage.alt = item.image.alt;
    itemImage.style.objectFit = 'cover';
    itemImage.style.width = '249px';
    itemImage.style.height = '320px';

    swipperItem.append(itemImage);

    swipperWrapper.append(swipperItem);
  });

  const swiper = new Swiper('.banner__slider', {
    speed: 400,
    spaceBetween: 100,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const recommendSwiper = new Swiper('.recommend__slider', {
    speed: 400,
    spaceBetween: 100,
    loop: true,
    slidesPerView: 4,
    slidesPerGroupSkip: 4,
    navigation: {
      prevEl: '.recommend__slider > .swiper-button-prev',
      nextEl: '.recommend__slider > .swiper-button-next',
    },
  });
}
Main();

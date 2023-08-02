import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs';
import { tiger } from './../utils/tiger.js';
import { getNode } from './getNode.js';
import { addClass } from './css.js';
import { insertLast } from './insert.js';
import { getNodes, priceToString } from '/lib/index.js';

export async function Main() {
  const { data } = await tiger.get('http://localhost:3000/banner');

  // 메인 배너 스와이퍼

  data.forEach((item) => {
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
}

export async function product() {
  const { data } = await tiger.get('http://localhost:3000/products');

  // 이 상품 어때요 스와이퍼

  data.forEach((item) => {
    const swipperWrapper = getNode('.recommend__slider > .swiper-wrapper');

    const swipperItem = document.createElement('div');
    addClass(swipperItem, 'swiper-slide');

    const productImage = document.createElement('img');
    productImage.src = item.image.thumbnail;
    productImage.alt = item.image.alt;
    productImage.style.objectFit = 'cover';
    productImage.style.width = '249px';

    const productImageWrapper = document.createElement('div');
    addClass(productImageWrapper, 'recommend__product__image__wrapper');
    addClass(productImageWrapper, 'relative');
    productImageWrapper.append(productImage);

    // title 엘리먼트 추가
    const productTitle = document.createElement('dd');
    productTitle.textContent = item.name;
    productTitle.classList.add('text-[14px]', 'pt-4');

    // 할인율 엘리먼트 추가
    const productSale = document.createElement('dd');
    if (item.saleRatio !== 0) {
      productSale.textContent = `${item.saleRatio * 100}%`;
    } else {
      if (productSale.parentNode) {
        productSale.parentNode.removeChild(productSale);
      }
    }
    productSale.classList.add('mr-2', 'inline-block', 'text-lg', 'font-semibold', 'text-[#FA622F]');

    // price 엘리먼트 추가
    const productPrice = document.createElement('dd');
    productPrice.textContent = `${
      item.saleRatio > 0 ? item.salePrice.toLocaleString() : item.price.toLocaleString()
    }원`;
    productPrice.classList.add('font-semibold', 'text-[20px]', 'pt-2', 'inline-block', 'mb-2');

    // 원가 삭제 엘리먼트 추가
    const productDel = document.createElement('del');
    if (item.saleRatio !== 0) {
      productDel.textContent = `${item.price}원`;
    } else {
      if (productSale.parentNode) {
        productDel.parentNode.removeChild(productDel);
      }
    }
    productDel.classList.add('text-sm', 'text-[#898989]', 'block');

    swipperItem.append(productImageWrapper);
    swipperItem.append(productTitle);
    swipperItem.append(productSale);
    swipperItem.append(productPrice);
    swipperItem.append(productDel);

    swipperWrapper.append(swipperItem);

    const template = `
    <button
    type="button"
    title="장바구니에 담기"
    class="accentCart_1 absolute right-4 top-64 h-[45px] w-[45px] bg-[url('/assets/images/main/ic-add-cart.svg')]">
    </button>
      `;
    insertLast(productImageWrapper, template);
  });

  // 놓치면 후회할 가격 스와이퍼

  data.reverse().forEach((item) => {
    const priceWrapper = getNode('.price__slider > .swiper-wrapper');

    const swipperItem = document.createElement('div');
    addClass(swipperItem, 'swiper-slide');

    const productImage = document.createElement('img');
    productImage.src = item.image.thumbnail;
    productImage.alt = item.image.alt;
    productImage.style.objectFit = 'cover';
    productImage.style.width = '249px';

    const productImageWrapper = document.createElement('div');
    addClass(productImageWrapper, 'recommend__product__image__wrapper');
    addClass(productImageWrapper, 'relative');
    productImageWrapper.append(productImage);

    // title 엘리먼트 추가
    const productTitle = document.createElement('dd');
    productTitle.textContent = item.name;
    productTitle.classList.add('text-[14px]', 'pt-4');

    // 할인율 엘리먼트 추가
    const productSale = document.createElement('dd');
    if (item.saleRatio !== 0) {
      productSale.textContent = `${item.saleRatio * 100}%`;
    } else {
      if (productSale.parentNode) {
        productSale.parentNode.removeChild(productSale);
      }
    }
    productSale.classList.add('mr-2', 'inline-block', 'text-lg', 'font-semibold', 'text-[#FA622F]');

    // price 엘리먼트 추가
    const productPrice = document.createElement('dd');
    productPrice.textContent = `${
      item.saleRatio > 0 ? item.salePrice.toLocaleString() : item.price.toLocaleString()
    }원`;
    productPrice.classList.add('font-semibold', 'text-[20px]', 'pt-2', 'inline-block', 'mb-2');

    // 원가 삭제 엘리먼트 추가
    const productDel = document.createElement('del');
    if (item.saleRatio !== 0) {
      productDel.textContent = `${item.price}원`;
    } else {
      if (productSale.parentNode) {
        productDel.parentNode.removeChild(productDel);
      }
    }
    productDel.classList.add('text-sm', 'text-[#898989]', 'block');

    swipperItem.append(productImageWrapper);
    swipperItem.append(productTitle);
    swipperItem.append(productSale);
    swipperItem.append(productPrice);
    swipperItem.append(productDel);

    priceWrapper.append(swipperItem);

    const template = `
    <button
    type="button"
    title="장바구니에 담기"
    class="accentCart_1 absolute right-4 top-64 h-[45px] w-[45px] bg-[url('/assets/images/main/ic-add-cart.svg')]">
    </button>
      `;
    insertLast(productImageWrapper, template);
  });

  /* ------------------------------- 스와이퍼 장바구니버튼 ------------------------------ */
  const product = data.map((item) => {
    return {
      id: item.id,
      name: item.name,
      price: priceToString(item.price),
      salePrice: priceToString(item.salePrice),
      image: item.image['thumbnail'],
      description: item.description,
      saleRatio: item.saleRatio * 100,
      stock: item.stock,
      type: item.type,
    };
  });
  const addCartButton = getNodes('.accentCart_1');
  addCartButton.forEach((item) => {
    item.addEventListener('click', handleAddCart);
  });
  function handleAddCart(e) {
    const target = e.target.closest('.swiper-slide');
    console.log(target);
    const targetName = target.querySelector('dd').textContent;
    console.log(targetName);
    product.forEach((item) => {
      if (item.name === targetName) {
        tiger.post('http://localhost:3000/select', item);
      }
    });
    alert('상품을 장바구니에 담았습니다');
  }

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

  const priceSwiper = new Swiper('.price__slider', {
    speed: 400,
    spaceBetween: 10,
    // loop: true,
    slidesPerView: 4,
    slidesPerGroup: 4,
    // slideoffsetBefore: 100,
    // siideoffsetAfter: 100,
    navigation: {
      prevEl: '.swiper-button-prev.price__button__prev',
      nextEl: '.swiper-button-next.price__button__next',
    },
  });
}

// 이 상품 어때요/ 놓치면 후회할 가격 스와이퍼 버튼 숨김 함수

export function clickButton() {
  const recommendBannerPrevbtn = document.querySelector('.recommend__button__prev');
  const recommendBannerNextbtn = document.querySelector('.recommend__button__next');
  const priceBannerPrevbtn = document.querySelector('.price__button__prev');
  const priceBannerNextbtn = document.querySelector('.price__button__next');

  recommendBannerNextbtn.addEventListener('click', () => {
    recommendBannerPrevbtn.style.display = 'block';
    recommendBannerNextbtn.style.display = 'none';
  });

  recommendBannerPrevbtn.addEventListener('click', () => {
    recommendBannerNextbtn.style.display = 'block';
    recommendBannerPrevbtn.style.display = 'none';
  });

  priceBannerNextbtn.addEventListener('click', () => {
    priceBannerPrevbtn.style.display = 'block';
    priceBannerNextbtn.style.display = 'none';
  });

  priceBannerPrevbtn.addEventListener('click', () => {
    priceBannerNextbtn.style.display = 'block';
    priceBannerPrevbtn.style.display = 'none';
  });
}

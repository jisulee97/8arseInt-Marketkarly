import { getNode } from '../../lib/dom/getNode.js';

// 카테고리 리스트 토글 함수

function categoryToggle() {
  const categoryMenuBtn = getNode('.menu__button__category');
  const dropDownMenu = getNode('.category');

  categoryMenuBtn.addEventListener('click', () => {
    dropDownMenu.classList.toggle('hidden');
  });
}
categoryToggle();

// 프로모션 제거 함수

function removePromotion() {
  const promotionBtn = getNode('.promotion__button');
  const promotion = getNode('.promotion');

  promotionBtn.addEventListener('click', () => {
    promotion.classList.toggle('hidden');
  });
}
removePromotion();

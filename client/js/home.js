import { getNode } from '../lib/dom/getNode.js';
import { getStorage } from '../lib/utils/storage.js';
import { storageKeys } from './storageKey/index.js';
import { Main, clickButton, product } from '/lib/index.js';

Main();
clickButton();
product();

export async function renderRecentProducts() {
  // 데이터를 가져오기
  const recentProductDatas = await getStorage(storageKeys.recentProductsKey);

  if (recentProductDatas) {
    recentProductDatas.forEach((item) => {
      /**
       * <div class="recent__product__content mx-auto h-[50px] w-10">
       * <a href="#">
       * <img src="/assets/.../thumbnail.svg" alt="탱탱쫄면"/>
       * </a>
       * </div>
       */
      // 최상위 .recent__product__container 앨리멘트 가져오기
      const recentProductsContainer = getNode('.recent__product__container');

      const recentProductContentDiv = document.createElement('div');
      recentProductContentDiv.className = 'recent__product__content mx-auto w-10 pb-1';

      const recentProductContentA = document.createElement('a');
      recentProductContentA.href = '/views/product-list.html';

      const recentProductContentImg = document.createElement('Img');
      recentProductContentImg.src = item.src;
      recentProductContentImg.alt = item.alt;

      recentProductContentA.append(recentProductContentImg);
      recentProductContentDiv.append(recentProductContentA);
      recentProductsContainer.append(recentProductContentDiv);
    });
  }
}
renderRecentProducts();

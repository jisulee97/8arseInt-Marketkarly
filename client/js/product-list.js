import { getNode, priceToString, toggleClass, tiger, insertLast } from '/lib/index.js';

const brand = getNode('#buttonBrand');

brand.addEventListener('click', () => {
  toggleClass(brand, 'is--clicked');
});

function isSale(item) {
  return item.saleRatio !== 0 ? true : false;
}

async function productList() {
  const response = await tiger.get('http://localhost:3000/main');
  const productArray = response.data.products;
  console.log(productArray);
  const product = productArray.map((item) => {
    return {
      name: item.name,
      price: priceToString(item.price),
      salePrice: priceToString(item.salePrice),
      image: item.image['thumbnail'],
      description: item.description,
      saleRatio: item.saleRatio * 100,
      stock: item.stock,
    };
  });
  product.forEach((item) => {
    isSale(item)
      ? renderSaleProductList('.product__list', item)
      : renderUnSaleProductList('.product__list', item);
  });
}
productList();

function renderSaleProductList(target, data) {
  insertLast(target, createSaleProductList(data));
}
function renderUnSaleProductList(target, data) {
  insertLast(target, createUnSaleProductList(data));
}

function createSaleProductList({ name, price, salePrice, image, description, saleRatio, stock }) {
  return /* html */ `
    <li class="product__item relative mb-[26px]">
      <a href="#">
        <figure class="best__item">
          <img
            src="${image}"
            alt="${name}"
            aria-labelledby="bestDetergent_1"
            class="best__img mb-4"
            width="249px" />
          <figcaption class="best__caption">
            <h3 class="a11y sr-only">${name}</h3>
            <dl class="relative">
              <dt class="a11y sr-only">상품명</dt>
              <dd id="bestDetergent_1" class="best__name mb-2 pt-[26px]">
                ${name}
              </dd>
              <dt class="a11y sr-only">정상가격</dt>
              <dd class="best__regularPrice absolute top-[100px] text-sm text-[#898989]">
                <del>${price}원</del>
              </dd>
              <dt class="a11y sr-only">할인율</dt>
              <dd
                class="best__discountPercent mr-2 inline text-lg font-semibold text-[#FA622F]">
                ${saleRatio}%
              </dd>
              <dt class="a11y sr-only">할인가격</dt>
              <dd class="best__price mb-2 inline text-lg font-semibold">
                <ins class="best__discountPrice no-underline">${salePrice}원</ins>
              </dd>
              <dt class="a11y sr-only">상품설명</dt>
              <dd class="best__info mb-2 mt-[35px] text-sm text-[#898989]">
                ${description}
              </dd>
              <dt aria-hidden="true" class="a11y sr-only">배송안내</dt>
              <dd
                class="best__deliveryDetergent absolute top-0 text-sm font-semibold text-[#898989]">
                샛별배송
              </dd>
              <dt aria-hidden="true" class="a11y sr-only">단독</dt>
              <dd
                class="best__only mr-2 inline rounded bg-[#E1E1E1] p-1 text-sm font-semibold text-primary">
                Karly Only
              </dd>
              ${
                stock <= 5
                  ? `            
                  <dt aria-hidden="true" class="a11y sr-only">수량정보</dt>
                  <dd class="best__limit inline rounded bg-[#E1E1E1] p-1 text-sm font-semibold">
                    한정수량
                  </dd>
                  `
                  : ``
              }
            </dl>
          </figcaption>
        </figure>
      </a>
      <button
        type="button"
        title="장바구니에 담기"
        class="accentCart_1 absolute right-4 top-64 h-[45px] w-[45px] bg-[url('/assets/images/main/ic-add-cart.svg')]"></button>
    </li>
  `;
}

function createUnSaleProductList({ name, price, image, description, stock }) {
  return /* html */ `
  <li class="product__item relative mb-[26px] ">
    <a href="./product-detail.html">
      <figure class="best__item">
        <img
          src="${image}"
          alt="${name}"
          aria-labelledby="bestTangtang_1"
          class="best__img mb-4"
          width="249px" />
        <figcaption class="best__caption">
          <h3 class="a11y sr-only">${name}</h3>
          <dl class="relative">
            <dt class="a11y sr-only">상품명</dt>
            <dd id="bestTangtang_1" class="best__name mb-2 pt-[26px]">
              ${name}
            </dd>
            <dt class="a11y sr-only">가격</dt>
            <dd class="best__price mb-2 text-lg font-semibold">${price}원</dd>
            <dt class="a11y sr-only">상품설명</dt>
            <dd class="best__info mb-2 text-sm text-[#898989]">
              ${description}
            </dd>
            <dt aria-hidden="true" class="a11y sr-only">배송안내</dt>
            <dd
              class="best__delivery absolute top-0 text-sm font-semibold text-[#898989]">
              샛별배송
            </dd>
            <dt aria-hidden="true" class="a11y sr-only">단독</dt>
            <dd
              class="best__only mr-2 inline rounded bg-[#E1E1E1] p-1 text-sm font-semibold text-primary">
              Karly Only
            </dd>
            ${
              stock <= 5
                ? `
                <dt aria-hidden="true" class="a11y sr-only">수량정보</dt>
                <dd class="best__limit inline rounded bg-[#E1E1E1] p-1 text-sm font-semibold">
                  한정수량
                </dd>
                `
                : ``
            }
          </dl>
        </figcaption>
      </figure>
    </a>
    <button
      type="button"
      title="장바구니에 담기"
      class="accentCart_1 absolute right-4 top-64 h-[45px] w-[45px] bg-[url('/assets/images/main/ic-add-cart.svg')]"></button>
  </li>
`;
}

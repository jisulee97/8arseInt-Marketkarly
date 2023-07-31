import { insertLast, priceToString, tiger } from '../../lib/index.js';
import { getshallowDataList } from '../cart.js';

function isSale(item) {
  return item.saleRatio !== 0 ? true : false;
}

// async function productList() {
//   const response = await tiger.get('http://localhost:3000/main');
//   const productArray = response.data.products;
//   console.log(productArray);
  
//   const product = productArray.map((item) => {
//     return {
//       name: item.name,
//       price: priceToString(item.price),
//       salePrice: priceToString(item.salePrice),
//       image: item.image['thumbnail'],
//       description: item.description,
//       saleRatio: item.saleRatio * 100,
//       stock: item.stock,
//     };
//   });
//   product.forEach((item) => {
//     isSale(item)
//       ? renderSaleProductList('.product__list', item)
//       : renderUnSaleProductList('.product__list', item);
//   });
// }

const createShoppingList = ({ name, alt, price, salePrice, storageType, image } = {}) => {
  let i = 0;
  // getshallowDataList();

  return /* html */ `
  <ul class="selectGoods">
  <li class="selectGoods__leftLi alignCenter">
    <div class="selectGoods__checkboxWrapper">
      <input
        type="checkbox"
        class="checkbox__allSelect hidden"
        name="checkbox__allSelect"
        id=" checkbox_food1" />
      <label for=" checkbox_food1" class="checkbox__label selectGoods__label">
        <span class="checkbox__img"></span>
      </label>
    </div>
    <figure class="selectGoods__goodsImg alignCenter">
      <img src="${image}" alt="${alt}" width="60px" />
      <figcaption>
        <h3>${name}</h3>
      </figcaption>
    </figure>
  </li>
  <li class="selectGoods__rightLi alignCenter">
    <div class="selectGoods__buttons alignCenter">
      <button class="selectGoods__button cart__minus"></button>
      <button class="selectGoods__button cart__num">1</button>
      <button class="selectGoods__button cart__plus"></button>
    </div>
    <div class="selectGoods__totalPriceWrapper">
      <p class="selectGoods__totalPrice">${salePrice}<span>원</span></p>
      <p class="selectGoods__discount">${price}<span>원</span></p>
    </div>
    <button class="selectGoods__deleteButton">
      <img src="./../assets/images/cart/ic-cancel.svg" alt="삭제" />
    </button>
  </li>
</ul>
  `;
};

export function renderShoppingList(target, data) {
  insertLast(target, createShoppingList(data));
}

// const createShoppingList = () => {
//   return /* html */ `

//   <ul class="selectGoods">
//   <li class="selectGoods__leftLi alignCenter">
//     <div class="selectGoods__checkboxWrapper">
//       <input
//         type="checkbox"
//         class="checkbox__allSelect hidden"
//         name="checkbox__allSelect"
//         id=" checkbox_food1" />
//       <label for=" checkbox_food1" class="checkbox__label selectGoods__label">
//         <span class="checkbox__img"></span>
//       </label>
//     </div>
//     <figure class="selectGoods__goodsImg alignCenter">
//       <img src="./../assets/jukkumi/thumbnail.jpg" alt="" width="60px" />
//       <figcaption>
//         <h3>[비비고] 쭈꾸미</h3>
//       </figcaption>
//     </figure>
//   </li>
//   <li class="selectGoods__rightLi alignCenter">
//     <div class="selectGoods__buttons alignCenter">
//       <button class="selectGoods__button cart__minus"></button>
//       <button class="selectGoods__button cart__num">1</button>
//       <button class="selectGoods__button cart__plus"></button>
//     </div>
//     <div class="selectGoods__totalPriceWrapper">
//       <p class="selectGoods__totalPrice">3,000<span>원</span></p>
//       <p class="selectGoods__discount">4,000<span>원</span></p>
//     </div>
//     <button class="selectGoods__deleteButton">
//       <img src="./../assets/images/cart/ic-cancel.svg" alt="삭제" />
//     </button>
//   </li>
// </ul>

//   `;
// };

// export function renderShoppingList(target) {
//   insertLast(target, createShoppingList());
// }

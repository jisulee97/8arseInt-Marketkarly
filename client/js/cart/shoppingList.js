import { insertLast } from '../../lib/index.js';
import { getshallowDataList } from '../cart.js';

const createShoppingList = ({ id, name, alt, price, salePrice, storageType, image } = {}) => {
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
      <img src="./../assets/jukkumi/thumbnail.jpg" alt="" width="60px" />
      <figcaption>
        <h3>[비비고] 쭈꾸미</h3>
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
      <p class="selectGoods__totalPrice">3,000<span>원</span></p>
      <p class="selectGoods__discount">4,000<span>원</span></p>
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

import { attr, clearContents, getNode, getNodes, tiger, typeError } from '../lib/index.js';
import { renderShoppingList } from './cart/index.js';


const foodCategoryList = getNode('.food__categorylist');
const orderButton = getNode('.cart__orderButton');
const deleteButtonInCart = getNodes('.selectGoods__deleteButton');

const URL = 'http://localhost:3000/main';

// function clickEvent(e) {
//   renderShoppingList(foodCategoryList);
// }

/* goods data */
export async function getshallowDataList(e) {
  const target = e.target.closest('button');
  console.log(target);

  const response = await tiger.get(URL);
  const products = response.data.products;
  if (products.forEach((item) => console.log(item.name)) === target) {
    console.log();
  }
}

orderButton.addEventListener('click', getshallowDataList);

/* goods Thumbnail */
export async function getDeepDataList(e, index) {
  const response = await tiger.get(URL);
  const products = response.data.products;
  console.log(products);

  const entries = Object.entries(products);
  // return entries[index].forEach((item) => getFoodThumbnail(item));
  entries.map((item) => console.log(getFoodThumbnail(item)));
}

const getFoodThumbnail = (item) => {
  return item.image;
};

// getDeepDataList(0);
// orderButton.addEventListener('click', getDeepDataList);
// const renderSelectList = () => {};

// orderButton.addEventListener('click', clickEvent);

// function handleDelete(e) {
//   let button = e.target.closest('button');
//   if (!button) return;

//   tiger.delete(`http://localhost:3000/main/products/${id}`).then(() => {
//     clearContents(foodCategoryList);
//     renderSelectList();
//   });
// }

import {
  attr,
  clearContents,
  getNode,
  getNodes,
  tiger,
  insertLast,
  priceToString,
  toggleClass,
} from '../lib/index.js';

const cartListButton = getNodes('.cartListButton');

cartListButton.forEach((item) => {
  item.addEventListener('click', () => {
    let target = item.closest('.spread');
    toggleClass(target, 'is--clicked');
  });
});

function isSale(item) {
  return item.saleRatio !== 0 ? true : false;
}

function renderSaleCartList(target, data) {
  insertLast(target, createSaleCartList(data));
}
function renderUnSaleCartList(target, data) {
  insertLast(target, createUnSaleCartList(data));
}

function createSaleCartList({ name, price, salePrice, image, id }) {
  return /* html */ `
  <li class="mt-5 items-center flex justify-between" id=${id}>
    <div class="flex gap-2">
      <div class="flex items-center">
        <input
          type="checkbox"
          class="checkbox__select peer absolute opacity-0"
          name="checkbox__allSelect"
          id="checkbox__${id}" />
        <label
          for="checkbox__${id}"
          class="block h-6 w-6 bg-[url('/assets/images/cart/ic-checked-false.svg')] bg-no-repeat peer-checked:bg-[url('/assets/images/cart/ic-checked-true.svg')]">
        </label>
      </div>
      <figure class="flex items-center gap-[14px]">
        <img src="${image}" alt="${name}" width="60px" />
        <figcaption>
          <h3 class="text-base font-semibold">${name}</h3>
        </figcaption>
      </figure>
    </div>
    <div class="flex items-center">
      <div class="flex h-7 items-center rounded border border-[#dbdbdb]">
        <button class="h-7 w-7 bg-[url('/assets/images/main/Minus.svg')]"></button>
        <span class="flex h-7 w-7 items-center justify-center text-[14px]">1</span>
        <button class="h-7 w-7 bg-[url('/assets/images/main/Plus.svg')]"></button>
      </div>
      <div class="flex items-center gap-2">
        <div class="flex flex-col text-end">
          <span class="text-base">${salePrice}<span>원</span></span>
          <del class="text-[14px] text-[#C4C4C4]">${price}<span>원</span></del>
        </div>
        <button class="deleteDataButton">
          <img src="/assets/images/cart/ic-cancel.svg" alt="삭제" />
        </button>
      </div>
    </div>
  </li>
  `;
}

function createUnSaleCartList({ name, price, image, id }) {
  return /* html */ `
  <li class="mt-5 items-center flex justify-between" id=${id}>
    <div class="flex gap-2">
      <div class="flex items-center">
        <input
          type="checkbox"
          class="checkbox__select peer absolute opacity-0"
          name="checkbox__allSelect"
          id="checkbox__${id}" />
        <label
          for="checkbox__${id}"
          class="block h-6 w-6 bg-[url('/assets/images/cart/ic-checked-false.svg')] bg-no-repeat peer-checked:bg-[url('/assets/images/cart/ic-checked-true.svg')]">
        </label>
      </div>
      <figure class="flex items-center gap-[14px]">
        <img src="${image}" alt="${name}" width="60px" />
        <figcaption>
          <h3 class="text-base font-semibold">${name}</h3>
        </figcaption>
      </figure>
    </div>
    <div class="flex items-center">
      <div class="flex h-7 items-center rounded border border-[#dbdbdb]">
        <button class="h-7 w-7 bg-[url('/assets/images/main/Minus.svg')]"></button>
        <span class="flex h-7 w-7 items-center justify-center text-[14px]">1</span>
        <button class="h-7 w-7 bg-[url('/assets/images/main/Plus.svg')]"></button>
      </div>
      <div class="flex items-center gap-2">
        <div class="text-end">
          <span class="text-base">${price}<span>원</span></span>
        </div>
        <button class="deleteDataButton">
          <img src="./../assets/images/cart/ic-cancel.svg" alt="삭제" />
        </button>
      </div>
    </div>
  </li>
`;
}

async function cartList() {
  const response = await tiger.get('http://localhost:3000/select');
  const productArray = response.data;
  const product = productArray.map((item) => {
    return {
      id: item.id,
      name: item.name,
      price: priceToString(item.price),
      salePrice: priceToString(item.salePrice),
      image: item.image,
      description: item.description,
      saleRatio: item.saleRatio * 100,
      stock: item.stock,
      type: item.type,
    };
  });
  product.forEach((item) => {
    if (item.type === 'cold') {
      isSale(item)
        ? renderSaleCartList('#listCold', item)
        : renderUnSaleCartList('#listCold', item);
    }
    if (item.type === 'frozen') {
      isSale(item)
        ? renderSaleCartList('#listFrozen', item)
        : renderUnSaleCartList('#listFrozen', item);
    }
    if (item.type === 'room') {
      isSale(item)
        ? renderSaleCartList('#listRoom', item)
        : renderUnSaleCartList('#listRoom', item);
    }
  });
  const total = product.length;
  let counting = getNodes('span.checkbox__selectDelete');
  counting.forEach((item) => {
    item.textContent = `전체선택 (0/${total})`;
  });
}

const addedCartList = getNode('.foodCategory');
addedCartList.addEventListener('click', handleDelete);

async function handleDelete(e) {
  const button = e.target.closest('.deleteDataButton');
  if (!button) return;
  const id = attr(button.closest('li'), 'id');

  const response = await tiger.get('http://localhost:3000/select/');
  const productArray = response.data;
  const product = productArray.map((item) => {
    return {
      id: item.id,
      name: item.name,
      price: priceToString(item.price),
      salePrice: priceToString(item.salePrice),
      image: item.image,
      description: item.description,
      saleRatio: item.saleRatio * 100,
      stock: item.stock,
      type: item.type,
    };
  });
  product.forEach((item) => {
    if (id === item.id) {
      tiger.delete(`http://localhost:3000/select/${id}`);
    }
  });
  clearContents('#listCold');
  clearContents('#listFrozen');
  clearContents('#listRoom');
  cartList();
}

async function selectDelete() {
  const countSelects = document.querySelectorAll(".foodCategory input[type='checkbox']");
  countSelects.forEach((item) => {
    if (item.checked) {
      const id = item.id.slice(10);
      tiger.delete(`http://localhost:3000/select/${id}`);
    }
  });
  const response = await tiger.get('http://localhost:3000/select/');
  const productArray = response.data;
  const product = productArray.map((item) => {
    return {
      id: item.id,
      name: item.name,
      price: priceToString(item.price),
      salePrice: priceToString(item.salePrice),
      image: item.image,
      description: item.description,
      saleRatio: item.saleRatio * 100,
      stock: item.stock,
      type: item.type,
    };
  });
  clearContents('#listCold');
  clearContents('#listFrozen');
  clearContents('#listRoom');
  cartList();
}

const selectDeleteButton = getNodes('button.checkbox__selectDelete');
selectDeleteButton.forEach((item) => {
  item.addEventListener('click', selectDelete);
});

cartList();

const shoppingCartList = getNode('.cart__shoppingCartList');
shoppingCartList.addEventListener('click', checkInputs);

const selectAllBoxes = getNodes('.checkbox__allSelect');
selectAllBoxes.forEach((item) => {
  item.addEventListener('click', selectAll);
});

function selectAll() {
  const selectButtonEl = getNodes('.checkbox__select');
  selectButtonEl.forEach((item) => {
    if (this.checked) {
      item.checked = true;
    }
    if (!this.checked) {
      item.checked = false;
    }
  });
}

async function checkInputs(e) {
  const response = await tiger.get('http://localhost:3000/select/');
  const productArray = response.data;
  const product = productArray.map((item) => {
    return {
      id: item.id,
      name: item.name,
      price: priceToString(item.price),
      salePrice: priceToString(item.salePrice),
      image: item.image,
      description: item.description,
      saleRatio: item.saleRatio * 100,
      stock: item.stock,
      type: item.type,
    };
  });
  const total = product.length;
  let count = 0;
  const countSelects = document.querySelectorAll(".foodCategory input[type='checkbox']");

  countSelects.forEach((item) => {
    if (item.checked) {
      count++;
    }
    return count;
  });
  let counting = getNodes('span.checkbox__selectDelete');
  counting.forEach((item) => {
    item.textContent = `전체선택 (${count}/${total})`;
  });
}

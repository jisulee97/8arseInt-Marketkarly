import { getNode, toggleClass } from '/lib/index.js';

const brand = getNode('#buttonBrand');

brand.addEventListener('click', () => {
  toggleClass(brand, 'is--clicked');
});

import { getNode } from '../lib/dom/getNode.js';
import { insertLast, insertFirst } from '../lib/dom/insert.js';
// import { insertLast, getNode } from '../lib/index.js';

export function renderHeader() {
  const header = getNode('header');
  fetch(`./../pages/common/header.html`)
    .then((res) => res.text())
    .then((data) => insertFirst(header, data));
}

export function renderFooter() {
  const footer = getNode('footer');
  fetch('./../pages/common/footer.html')
    .then((res) => res.text())
    .then((data) => insertLast(footer, data));
}

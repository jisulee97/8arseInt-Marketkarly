import { getNode } from './../lib/dom/getNode.js';
// import { fadeout, } from "./index.js";



// 팝업창 제거 함수
export function fadeout() {
  const close = document.querySelector('.popupButton')
  const popup = document.querySelector('.popupWrapper')
  close.addEventListener('click', () => {
    popup.classList.add('hidden')
  })
}
fadeout()


import { getNodes, toggleClass, addClass, getNode, removeClass } from '/lib/index.js';

const information = getNodes('#notificationBtn');

information.forEach(item => {
  item.addEventListener('click', () => {
    toggleClass(item, 'is--clicked')
  }) 
})


const review_show = getNode('.review__main');
const inquiry_show = getNode('.qna__main');
const review_popup = getNode('.productDetail-popup-review');
const inquiry_popup = getNode('.productDetail-popup-inquiry');

export function review_popup_show(e) {
  let showButton = e.target.closest('.reviewWrite__btn');
  let reviewWrapper = e.target.closest('.review__main');

  if (!showButton || !reviewWrapper) return;

  addClass(document.body, 'stop-scrolling');
  removeClass(review_popup, 'hidden');
}


export function review_popup_close(e) {
  let reviewWrapper = e.target.closest('.productDetail-popup__button-wrapper');
  let closeButton = e.target.closest('.productDetail-popup__cancel');

  if (!reviewWrapper || !closeButton) return;

  removeClass(document.body, 'stop-scrolling');
  addClass(review_popup, 'hidden');
}

export function inquiry_popup_show(e) {
  let showButton = e.target.closest('.qna__btn');
  let inquiryWrapper = e.target.closest('.qna__main');

  if (!showButton || !inquiryWrapper) return;

  addClass(document.body, 'stop-scrolling');
  removeClass(inquiry_popup, 'hidden');
}


export function inquiry_popup_close(e) {
  let inquiryWrapper = e.target.closest('.productDetail-popup__button-wrapper');
  let closeButton = e.target.closest('.productDetail-popup__cancel');

  if (!inquiryWrapper || !closeButton) return;

  removeClass(document.body, 'stop-scrolling');
  addClass(inquiry_popup, 'hidden');
}

review_show.addEventListener('click', review_popup_show);
review_popup.addEventListener('click', review_popup_close)

inquiry_show.addEventListener('click', inquiry_popup_show);
inquiry_popup.addEventListener('click', inquiry_popup_close);


import { addClass, getNode, removeClass } from '../lib/index.js';

const email = getNode('#userEmail');
const password = getNode('#userPassword');
const logInbutton = getNode('.btn-login');
const warninNoValue = getNode('.WarningModal__noValue');
const warningNotExist = getNode('.WarningModal__notExist');

const user = {
  id: 'asdf123@naver.com',
  pw: '1234asdf!',
};

function emailReg(text) {
  const re = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

let emailPass = false;
let pwPass = false;

/* 이메일 유효성 검사 */
export function validateId() {
  let value = this.value;
  if (emailReg(value) === true) {
    this.classList.remove('is--invalid');
    emailPass = true;
  } else {
    this.classList.add('is--invalid');
    emailPass = false;
  }
}

/* 패스워드 유효성 검사 */
export function validatePw() {
  let value = this.value;
  if (pwReg(value) === true) {
    this.classList.remove('is--invalid');
    pwPass = true;
  } else {
    this.classList.add('is--invalid');
    pwPass = false;
  }
}

// /* 로그인 버튼 */
export function handlelogInButton(e) {
  e.preventDefault();
  if (!emailPass || !pwPass) {
    setModalVisibleNoValue();
  } else if (emailPass === true && pwPass === true) {
    const id = email.value;
    const pw = password.value;
    const getUserId = user.id;
    const getUserPw = user.pw;
    if (id === getUserId && pw === getUserPw) {
      location.href = 'http://localhost:5500/';
    } else {
      setModalVisibleNotExist();
    }
  }
}

/* 팝업창 제거 함수 */
const setModalVisibleNoValue = () => {
  let boolean = false;
  if (!boolean) {
    removeClass(warninNoValue, 'visbleHidden');
  } else {
    addClass(warninNoValue, 'visbleHidden');
  }
};

const setModalVisibleNotExist = () => {
  let boolean = false;
  if (!boolean) {
    removeClass(warningNotExist, 'visbleHidden');
  } else {
    addClass(warningNotExist, 'visbleHidden');
  }
};

function handleModalButton(e) {
  const target = e.target.closest('button');
  addClass(warningNotExist, 'visbleHidden');
  addClass(warninNoValue, 'visbleHidden');
}

email.addEventListener('input', validateId);
password.addEventListener('input', validatePw);
logInbutton.addEventListener('click', handlelogInButton);

warninNoValue.addEventListener('click', handleModalButton);
warningNotExist.addEventListener('click', handleModalButton);

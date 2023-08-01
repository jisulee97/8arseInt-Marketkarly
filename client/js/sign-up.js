import { getNode as $, getNodes } from '../lib/dom/getNode.js';

const userId = $('#userId');
const userPassword = $('#userPassword');
const checkPassword = $('#checkPassword');
const userName = $('#username');
const email = $('#email');
const phone = $('#phone');
const birthbirthYear = $('#birthYear');
const birthbirthMonth = $('#birthMonth');
const birthbirthday = $('#birthDay');
const errors = getNodes('.signUp__errorMessage');

// console.log(Object.entries(errors));
// for (const [key, value] of Object.entries(errors)) {
// }

// console.log(errors[3]);

let idPass = false;
let pwPass = false;
let checkPwPass = false;
let emailPass = false;
let namePass = false;
let phonePass = false;
let yearPass = false;
let monthPass = false;
let datePass = false;

/* 아이디 유효성 검사 */
export function validateId() {
  let value = this.value;
  if (idReg(value) === true) {
    errors[0].classList.remove('signUp--invalid');
    idPass = true;
    return;
  } else {
    errors[0].classList.add('signUp--invalid');
    idPass = false;
    return;
  }
}

/* 패스워드 유효성 검사 */
export function validatePw() {
  let value = this.value;
  if (pwReg(value) === true) {
    errors[1].classList.remove('signUp--invalid');
    pwPass = true;
    return;
  } else {
    errors[1].classList.add('signUp--invalid');
    pwPass = false;
    return;
  }
}
/* 패스워드 체크 유효성 검사 */
export function validatePwCheck() {
  let value = this.value;
  if (value === validatePw.value) {
    errors[2].classList.remove('signUp--invalid');
    checkPwPass = true;
    return;
  } else {
    errors[2].classList.add('signUp--invalid');
    checkPwPass = false;
    return;
  }
}

/* 이름 유효성 검사 */
export function validateName() {
  let value = this.value;
  if (nameReg(value) === true) {
    errors[3].classList.remove('signUp--invalid');
    namePass = true;
    return;
  } else {
    errors[3].classList.add('signUp--invalid');
    namePass = false;
    return;
  }
}

/* 이메일 유효성 검사 */
export function validateEmail() {
  let value = this.value;
  if (emailReg(value) === true) {
    errors[4].classList.remove('signUp--invalid');
    emailPass = true;
    return;
  } else {
    errors[4].classList.add('signUp--invalid');
    emailPass = false;
    return;
  }
}

/* 휴대폰 유효성 검사 */
export function validatePhone() {
  let value = this.value;
  if (pwReg(value) === true) {
    errors[5].classList.remove('signUp--invalid');
    phonePass = true;
    return;
  } else {
    errors[5].classList.add('signUp--invalid');
    phonePass = false;
    return;
  }
}

/* 생년 유효성 검사 */
export function validateYear() {
  let value = this.value;
  if (pwReg(value) === true) {
    errors[6].classList.remove('signUp--invalid');
    yearPass = true;
    return;
  } else {
    errors[6].classList.add('signUp--invalid');
    yearPass = false;
    return;
  }
}
/* 생월 유효성 검사 */
export function validateMonth() {
  let value = this.value;
  if (pwReg(value) === true) {
    errors[7].classList.remove('signUp--invalid');
    monthPass = true;
    return;
  } else {
    errors[7].classList.add('signUp--invalid');
    monthPass = false;
    return;
  }
}
/* 생일 유효성 검사 */
export function validateDate() {
  let value = this.value;
  if (pwReg(value) === true) {
    errors[8].classList.remove('signUp--invalid');
    datePass = true;
    return;
  } else {
    errors[8].classList.add('signUp--invalid');
    datePass = false;
    return;
  }
}

userId.addEventListener('input', validateId);
userPassword.addEventListener('input', validatePw);
checkPassword.addEventListener('input', validatePwCheck);
userName.addEventListener('input', validateName);
email.addEventListener('input', validateEmail);
phone.addEventListener('input', validatePhone);
birthbirthYear.addEventListener('input', validateYear);
birthbirthMonth.addEventListener('input', validateMonth);
birthbirthday.addEventListener('input', validateDate);

function idReg(text) {
  const re = /^[a-zA-Z0-9]{6,16}$/;
  return re.test(String(text).toLowerCase());
}
function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}
function emailReg(text) {
  const re = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  return re.test(String(text).toLowerCase());
}
function nameReg(text) {
  const re = /^[가-힣a-zA-Z]{2,15}$/;
  return re.test(String(text).toLowerCase());
}
function yearReg(text) {
  const re = /^[1-2]{1}[0-9]{3}$/;
  return re.test(String(text).toLowerCase());
}
function monthReg(text) {
  const re = /^[0-2]{1}[0-9]{1}$/;
  return re.test(String(text).toLowerCase());
}
function dayReg(text) {
  const re = /^[0-9]{1}[0-9]{1}$/;
  return re.test(String(text).toLowerCase());
}

import { getNode as $, getNodes as $$ } from '../lib/dom/getNode.js';
import { addClass, removeClass } from './../lib/dom/css.js';

const userId = $('#userId');
const userPassword = $('#userPassword');
const checkPassword = $('#checkPassword');
const userName = $('#username');
const email = $('#email');
const phone = $('#phone');
const birthdate = $('.signUp__birthday');
const errors = $$('.signUp__errorMessage');
const addInfoWrapper = $('.addInfoWrapper');
const InvitationIdWrapper = $('.InvitationIdWrapper');
const eventNameWrapper = $('.eventNameWrapper');

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

/* 생년월일 유효성 검사 */
function validateDate(e) {
  const isValidYear = yearReg();
  const isValidMonth = monthReg();
  const isValidDay = dayReg();

  if (isValidYear && isValidMonth && isValidDay) {
    yearPass = true;
    monthPass = true;
    datePass = true;
    errors[6].classList.remove('signUp--invalid');
  } else {
    errors[6].classList.add('signUp--invalid');
    yearPass = false;
    monthPass = false;
    datePass = false;
  }
}

/* 정규표현식 함수 */
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

/* 추가입력 사항 */

function getInvitationId(e) {
  let input = e.target.closest('input');
  if (!input) return;
  let inputValue = input.value;
  console.log(inputValue);

  if (inputValue === 'invite') {
    removeClass(InvitationIdWrapper, 'displayNone');
    addClass(eventNameWrapper, 'displayNone');
  } else if (inputValue === 'event') {
    addClass(InvitationIdWrapper, 'displayNone');
    removeClass(eventNameWrapper, 'displayNone');
  }
}

userId.addEventListener('input', validateId);
userPassword.addEventListener('input', validatePw);
checkPassword.addEventListener('input', validatePwCheck);
userName.addEventListener('input', validateName);
email.addEventListener('input', validateEmail);
phone.addEventListener('input', validatePhone);
birthdate.addEventListener('input', validateDate);
addInfoWrapper.addEventListener('click', getInvitationId);

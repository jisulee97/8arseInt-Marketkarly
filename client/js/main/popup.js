const close = document.querySelector('.popupButton')
const popup = document.querySelector('.popupWrapper')

export function fadeout() {
  close.addEventListener('click', () => {
    popup.classList.add('hidden')
  })
}


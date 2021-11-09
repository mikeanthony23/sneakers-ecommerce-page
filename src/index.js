import '@src/scss/main.scss'

import 'core-js/stable'

const headerOverlayEl = document.querySelector('.header__nav-list-overlay')

// remove header overlay
document.addEventListener('click', e => {
  const btn = e.target.closest('.header__nav-list-overlay')
  if (!btn) return
  console.log(btn)
  btn.classList.add('hidden')
  document.querySelector('.header__nav-list').classList.add('hidden')
})

// burger menu open
document.addEventListener('click', e => {
  const btn = e.target.closest('.header__burger-menu')
  if (!btn) return
  document.querySelector('.header__nav-list').classList.toggle('hidden')
  headerOverlayEl.classList.remove('hidden')
  document.querySelector('.cart').classList.add('hidden')
})

// burger menu close
document.addEventListener('click', e => {
  const btn = e.target.closest('.header__nav-list-item-close-btn')
  if (!btn) return
  document.querySelector('.header__nav-list').classList.toggle('hidden')
  headerOverlayEl.classList.add('hidden')
})

// cart open / close
document.addEventListener('click', e => {
  const btn = e.target.closest('.header__cart-btn')
  if (!btn) return
  document.querySelector('.cart').classList.toggle('hidden')
  document.querySelector('.header__nav-list').classList.add('hidden')
})

// cart checkout
document.addEventListener('click', e => {
  const btn = e.target.closest('.cart__checkout-btn')
  if (!btn) return
  document.querySelector('.cart').classList.toggle('hidden')
})

// add

let counter = 0
const currentQuantity = document.querySelector('.figure__current-qty')

document.addEventListener('click', e => {
  const btn = e.target.closest('.figure__plus-btn')
  if (!btn) return
  counter += 1
  currentQuantity.textContent = counter
  console.log((currentQuantity.dataset.qty = counter))
})

// minus
document.addEventListener('click', e => {
  const btn = e.target.closest('.figure__minus-btn')
  if (!btn || counter === 0) return
  counter -= 1
  currentQuantity.textContent = counter
  console.log((currentQuantity.dataset.qty = counter))
})

let currentPage = 0
const allImg = [...document.querySelectorAll('.figure__image-list-item')]
const maxSlide = allImg.length

const addAnim = function (currentSlide, animateOnClick = false) {
  allImg.forEach(function (img, i) {
    img.style.transform = `translateX(${100 * (i - currentSlide)}%)`
    if (animateOnClick === true) img.classList.add('transition')
  })
}
addAnim(0)
const slider = () => {
  // slider prev
  document.addEventListener('click', e => {
    const btn = e.target.closest('.figure__btn-slider-left')
    if (!btn) return
    currentPage -= 1
    if (currentPage === -1) currentPage = maxSlide - 1
    console.log(currentPage)
    addAnim(currentPage, true)
  })

  // slider next
  document.addEventListener('click', e => {
    const btn = e.target.closest('.figure__btn-slider-right')
    if (!btn) return
    currentPage += 1
    if (currentPage === maxSlide) currentPage = 0
    console.log(currentPage)
    addAnim(currentPage, true)
  })
}

slider()

// window.addEventListener('load', slider)

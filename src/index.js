import '@src/scss/main.scss'

import 'core-js/stable'

const headerOverlayEl = document.querySelector('.header__nav-list-overlay')

// remove header overlay
document.addEventListener('click', e => {
  const btn = e.target.closest('.header__nav-list-overlay')
  if (!btn) return
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
})

// minus
document.addEventListener('click', e => {
  const btn = e.target.closest('.figure__minus-btn')
  if (!btn || counter === 0) return
  counter -= 1
  currentQuantity.textContent = counter
})

let currentPage = 0
const allImg = [...document.querySelectorAll('.figure__image-list-item')]
const maxSlide = allImg.length

const addAnim = function (currentSlide, animateOnClick = true) {
  allImg.forEach(function (img, i) {
    img.style.transform = `translateX(${100 * (i - currentSlide)}%)`
    if (!animateOnClick) return
    if (img.classList.contains('figure__image-list-item-overlay')) return
    img.classList.add('transition')
  })
}
addAnim(0, false)

const slider = () => {
  // slider prev
  document.addEventListener('click', e => {
    const btn = e.target.closest('.figure__btn-slider-left')
    if (!btn) return
    currentPage -= 1
    if (currentPage === -1) currentPage = maxSlide - 1
    addAnim(currentPage)
  })

  // slider next
  document.addEventListener('click', e => {
    const btn = e.target.closest('.figure__btn-slider-right')
    if (!btn) return
    currentPage += 1
    if (currentPage === maxSlide) currentPage = 0
    addAnim(currentPage)
  })

  // thumbnail slider
  document.addEventListener('click', e => {
    const thumbnail = [...document.querySelectorAll('.figure__image-list-item-thumbnail')]
    const imageThumbnail = [...document.querySelectorAll('.figure__image-thumbnail')]

    const image = e.target.closest('.figure__image-thumbnail')
    if (!image) return
    const imageSlot = image.dataset.imagenumber

    imageThumbnail.forEach(el => el.classList.remove('figure__image-thumbnail--active'))
    thumbnail.forEach(el => el.classList.remove('figure__image-list-item-thumbnail--active'))

    thumbnail[imageSlot].classList.add('figure__image-list-item-thumbnail--active')
    imageThumbnail[imageSlot].classList.add('figure__image-thumbnail--active')

    addAnim(imageSlot)
  })
}

slider()

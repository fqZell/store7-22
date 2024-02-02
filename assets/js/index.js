var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 16,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    400: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 5,
    },
  }
});

document.addEventListener("DOMContentLoaded", () => {

  const parent = document.querySelector(".modal")
  if (!parent) return false

  const openModal = document.querySelector(".js-show-modal")
  const closeModal = document.querySelector(".js-close-modal")

  const open = () => {
    parent.classList.add("active")
    document.body.classList.add("active-body")
  }
  const close = () => {
    parent.classList.remove("active")
    document.body.classList.remove("active-body")
  }

  openModal.addEventListener("click", open)
  closeModal.addEventListener("click", close)

  parent.addEventListener('click', (event) => {
    if(event.target === parent) {
      close()
    }
  })

  document.addEventListener('keydown', (event, keyCode) => {
    if(event.keyCode === 27) {
      close()
    }
  })

})
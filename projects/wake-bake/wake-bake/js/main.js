(function () {

  document.addEventListener('click', burgerInit)

  function burgerInit(e) {

    const burgerIcon = e.target.closest('.burger-icon')
    const burgerNavLink = e.target.closest('.nav__link')

    if (!burgerIcon && !burgerNavLink) return

    if (burgerNavLink) {
      document.body.classList.remove('body--opened')
      return
    }


    document.body.classList.toggle('body--opened')

  }

  const modal = document.querySelector('.modal')
  const aboutButton = document.querySelector('.about__img-button')
  const modalButton = document.querySelector('.modal__button')

  aboutButton.addEventListener('click', openModal)
  modal.addEventListener('click', closeModal)
  getButton.addEventListener('click', closeModal)

  function openModal(e) {
    e.preventDefault()
    document.body.classList.toggle('modal--opened')
  }

  function closeModal(e) {
    e.preventDefault()

    const target = e.target

    if (
      target.closest('.modal__cancel') ||
      target.classList.contains('modal') || 
      target.classList.contains('modal__button')
    ) {
      document.body.classList.remove('modal--opened');
    }
  }

})()

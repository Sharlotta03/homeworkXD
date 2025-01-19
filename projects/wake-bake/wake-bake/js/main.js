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

})()

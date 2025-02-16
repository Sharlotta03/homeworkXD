(function () {
  //burger
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

  //modal

  const modal = document.querySelector('.modal')
  const aboutButton = document.querySelector('.about__img-button')
  const modalButton = document.querySelector('.modal__button')

  aboutButton.addEventListener('click', openModal)
  modal.addEventListener('click', closeModal)
  // getButton.addEventListener('click', closeModal)

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

  //tab

  const tabControls = document.querySelector('.tab-controls')

  tabControls.addEventListener('click', toggleTab)

  function toggleTab(e) {
    const tabControl = e.target.closest('.tab-controls__link')

    if (!tabControl) return
    e.preventDefault()
    if (tabControl.classList.contains('tab-controls__link-active')) return


    const tabContentID = tabControl.getAttribute('href')
    const tabContent = document.querySelector(tabContentID)
    const activeControl = document.querySelector('.tab-controls__link--active')
    const activeContent = document.querySelector('.tab-content--show')

    if (activeControl) {
      activeControl.classList.remove('.tab-controls__link--active')
    }

    if (activeContent) {
      activeContent.classList.remove('.tab-content--show')
    }



    activeControl.classList.remove('tab-controls__link--active')
    activeContent.classList.remove('tab-content--show')

    tabControl.classList.add('tab-controls__link--active')
    tabContent.classList.add('tab-content--show')
  }

  //accordion

  const accordionLists = document.querySelectorAll('.accordion-list');

  accordionLists.forEach(el => {
    el.addEventListener('click', (e) => {
      const accordionControl = e.target.closest(".accordion-list__control");

      // Проверяем, что клик был именно по контролу
      if (!accordionControl) return;

      const accordionItem = accordionControl.parentElement;
      const accordionContent = accordionControl.nextElementSibling;

      const accordionList = accordionItem.closest('.accordion-list');
      const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--active');

      if (accordionOpenedItem && accordionOpenedItem !== accordionItem) {
        const accordionOpenedContent = accordionOpenedItem.querySelector('.accordion-list__content');

        if (accordionOpenedContent) {
          accordionOpenedItem.classList.remove('accordion-list__item--active');
          accordionOpenedContent.style.maxHeight = null;
        }
      }

      accordionItem.classList.toggle('accordion-list__item--active');

      if (accordionItem.classList.contains('accordion-list__item--active')) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      } else {
        accordionContent.style.maxHeight = null;
      }
    });
  });

  //slider

  new Swiper('.gallery__slider', {
    spaceBetween: 16,
    slidesPerView: 1.5,

    pagination: {
      el: '.gallery__pagination',
      type: 'fraction',
    },

    navigation: {
      nextEl: '.gallery__next',
      prevEl: '.gallery__prev',
    },
    breakpoints: {
      451: {
        slidesPerView: 2,
      },
      601: {
        slidesPerView: 3,
      },
      801: {
        spaceBetween: 32,
      },
      1101: {
        slidesPerView: 4,
      },
    }
  });

  new Swiper('.testimonials__slider', {
    spaceBetween: 0,
    slidesPerView: 1,
    centeredSlides: true,


    navigation: {
      nextEl: '.testimonials__next',
      prevEl: '.testimonials__prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },

    breakpoints: {
      801: {
        slidesPerView: 1.5,
      },
      1101: {
        slidesPerView: 2,
      },
    }
  });

  const telInputs = document.querySelectorAll('input[type="tel"]')
  const im = new Inputmask('+7 (999) 999-99-99')
  im.mask(telInputs)

})()

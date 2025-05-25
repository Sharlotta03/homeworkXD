(function () {
  //burger
  document.addEventListener('click', burgerInit)

  function burgerInit(e) {

    const burgerIcon = e.target.closest('.burger-icon')
    const burgerNavLink = e.target.closest('.nav__link-cat')

    if (!burgerIcon && !burgerNavLink) return

    if (burgerNavLink) {
      document.body.classList.remove('body--opened')
      return
    }


    document.body.classList.toggle('body--opened')

  }
});

document.addEventListener('DOMContentLoaded', function () {
  const burgerMenu = document.querySelector('.burger-menu');
  const mobileMenu = document.querySelector('.mobile-menu');
  const overlay = document.querySelector('.overlay');

  burgerMenu.addEventListener('click', function () {
    this.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    overlay.classList.toggle('active');
  });

  overlay.addEventListener('click', function () {
    burgerMenu.classList.remove('active');
    mobileMenu.classList.remove('active');
    this.classList.remove('active');
  });
});

new Swiper('.header__slider', {
  spaceBetween: 40,
  slidesPerView: 1,
  centeredSlides: false,
  loop: true,
  grid: {
    rows: 1,
  },

  navigation: {
    nextEl: '.header__next',
    prevEl: '.header__prev',
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
    767: {
      slidesPerView: 2,
    }
  }
});


new Swiper('.favorite__slider', {
  spaceBetween: 84,
  slidesPerView: 1,
  centeredSlides: false,
  grid: {
    rows: 1,
  },
  breakpoints: {
    1000: {
      slidesPerView: 3,
    },
    650: {
      slidesPerView: 2,
    }
  }
});


new Swiper('.brends__slider', {
  spaceBetween: 80,
  slidesPerView: 3,
  centeredSlides: true,
  loop: true,
  grid: {
    rows: 1,
  },
  breakpoints: {
    1000: {
      slidesPerView: 8,
    },
    767: {
      slidesPerView: 6
    },
    480: {
      slidesPerView: 4,
    },
  }
});



const word = "flash";
const count = 12;
const repeated = (word + ' ').repeat(count);

document.getElementById("repeater1").textContent = repeated;
document.getElementById("repeater2").textContent = repeated;



const numberElement = document.getElementById('number');


numberElement.addEventListener('wheel', (event) => {
  event.preventDefault();

  let currentNumber = parseInt(numberElement.textContent, 10) || 0;
  let delta = Math.sign(event.deltaY);

  currentNumber -= delta * 1;

  if (currentNumber < 30) {
    currentNumber = 30;
  }
  if (currentNumber > 50) {
    currentNumber = 50;
  }

  numberElement.textContent = currentNumber;
});
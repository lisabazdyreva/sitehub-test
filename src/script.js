const navButton = document.querySelector('.main-nav__item');

const cancelSearchButton = document.querySelector('.form-search__reset-button');
const searchForm = document.querySelector('.form-search');
const searchInput = searchForm.querySelector('.form-search__input');
const searchList =  searchForm.querySelector('.form-search__select-list');

const openContactFormButton = document.querySelector('.info__call-button');

const toUpButton = document.querySelector('.footer__button-up');

const popup = document.querySelector('#popup').content.querySelector('.popup__overlay');

const popupNameInput = popup.querySelector('#popup-name');
const popupPhoneInput = popup.querySelector('#popup-phone');

const popupCloseButton = popup.querySelector('.popup__close-button');


const contactForm = document.querySelector('.feedback__contact-form');
const contactNameInput = contactForm.querySelector('#name');
const contactPhoneInput = contactForm.querySelector('#phone');


navButton.addEventListener('click', () => {
  navButton.classList.toggle('main-nav__item--open');
});

searchInput.addEventListener('input', (evt) => {
  if (evt.target.value !== "" && !searchList.classList.contains('form-search__select-list--open')) {
    searchList.classList.add('form-search__select-list--open');
  }

  if (evt.target.value === "") {
    searchList.classList.remove('form-search__select-list--open');
  }
});

cancelSearchButton.addEventListener('click', () => {
  searchList.classList.remove('form-search__select-list--open');
  searchInput.focus();
  searchForm.reset();
});

openContactFormButton.addEventListener('click', () => {
  document.body.appendChild(popup);
  popupNameInput.focus();


  const keydownEscapeHandler = (evt) => {
    if (evt.key === 'Esc' || evt.key === 'Escape') {
      popup.remove();
      popupPhoneInput.value = '';
      popupNameInput.value = '';
    }
    document.body.removeEventListener('keydown', keydownEscapeHandler);
  };

  document.body.addEventListener('keydown', keydownEscapeHandler);
});

popupCloseButton.addEventListener('click', () => {
  popup.remove();
  popupPhoneInput.value = '';
  popupNameInput.value = '';
});

toUpButton.addEventListener('click', () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
});

contactNameInput.addEventListener('input', (evt) => {
  if (evt.target.value.trim() === '' || !evt.target.value.match('[A-Za-zА-Яа-яЁё]')) {
    evt.target.setCustomValidity('Введите имя, пожалуйста');
    evt.target.classList.add('contact-form__input--invalid');
  } else if (evt.target.value.trim().length < 2) {
    evt.target.setCustomValidity('Имя должно состоять минимум из 2 символов.');
    evt.target.classList.add('contact-form__input--invalid');
  } else {
    evt.target.setCustomValidity('');
    evt.target.classList.remove('contact-form__input--invalid');
  }
})

contactPhoneInput.addEventListener('input', (evt) => {
  if (!evt.target.value.match('^((\\+7|7|8)+([0-9]){10})$')) {
    evt.target.setCustomValidity('Формат номера: +79097079988');
    evt.target.classList.add('contact-form__input--invalid');
  } else {
    evt.target.setCustomValidity('');
    evt.target.classList.remove('contact-form__input--invalid');
  }
 });

contactForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  contactNameInput.value = '';
  contactPhoneInput.value = '';
});

const sliderButtons = document.querySelectorAll('.banner__slider-arrow');

let slideIndex = 1;

const slides = document.querySelectorAll('.banner__slide');
const dotButtons= document.querySelectorAll('.banner__slider-button');


const showSlide = () => {
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });

  dotButtons.forEach((button) => {
    button.classList.remove('banner__slider-button--active');
  });

  slides[slideIndex - 1].style.display = 'grid';
  dotButtons[slideIndex - 1].classList.add('banner__slider-button--active');
};

showSlide();


const slideButtonClickHandler = (evt) => {
  switch (evt.currentTarget.dataset.slide) {
    case 'more':
      if (slideIndex + 1 > slides.length) {
        slideIndex = 1;
      } else {
        slideIndex += 1;
      }
      break;
    case 'less':
      if (slideIndex - 1 < 1) {
        slideIndex = slides.length;
      } else {
        slideIndex -= 1;
      }
      break;
  }
  showSlide();
};

const dotButtonClickHandler = (evt) => {
  slideIndex = Number(evt.currentTarget.dataset.slide);
  showSlide();
}

sliderButtons.forEach((button) => {
  button.addEventListener('click', slideButtonClickHandler);
});

dotButtons.forEach((button) => {
  button.addEventListener('click', dotButtonClickHandler)
});



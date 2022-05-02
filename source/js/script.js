const navMain = document.querySelector('.main-nav');
const navToggle = navMain.querySelector('.main-nav__toggle');
const navLinks = navMain.querySelectorAll('.main-nav__link');

const modal = document.getElementById('form_buy');
const closeBtn = modal.querySelector('.modal__close');
const modalWrapper = modal.querySelector('.modal__wrapper');

const forms = document.querySelectorAll('form');
const links = document.querySelectorAll('.js-buy');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (navMain.classList.contains('main-nav--opened')) {
      navMain.classList.remove('main-nav--opened');
      navMain.classList.add('main-nav--closed');
    }
  });
});

links.forEach((link) => {
  link.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (modal.classList.contains('modal--show')) {
      modal.classList.remove('modal--show');
    } else {
      modal.classList.add('modal--show');
    }
  });
});

modal.addEventListener('click', (evt) => {
  if (evt.target.closest('div') == null) {
    if (modal.classList.contains('modal--show')) {
      closeModal();
    }
  }
});

closeBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeModal();
});

window.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    evt.preventDefault();

    if (modal.classList.contains('modal--show')) {
      closeModal();
    }
  }
});

document.querySelectorAll('.btn__choose').forEach((btn) => {
  btn.addEventListener('click', (evt) => {
    evt.preventDefault();
    const link = evt.target.closest('a');
    const id = link.hash;

    if (id !== undefined) {
      document.querySelector('.country--selected').classList.remove('country--selected');

      if (document.querySelector(id)) {
        document.querySelector(id).classList.add('country--selected');
      }

      const tabs = document.querySelectorAll('.countries__btn');

      tabs.forEach((tab) => {
        if (tab.classList.contains('countries__btn--selected'))
          tab.classList.remove('countries__btn--selected');

        if (tab.hash == id)
          tab.classList.add('countries__btn--selected');
      })

      if (link.classList.contains('place')) {
        document.querySelector(id).scrollIntoView();
      }
    }
  });
});

forms.forEach((form) => {
  const phone = form.querySelector('.form__input-block--phone');
  const phoneInput = phone.querySelector('.form__input--phone');
  const email = form.querySelector('.form__input-block--email');
  const emailInput = email.querySelector('.form__input--email');

  form.addEventListener('submit', function (evt) {

    if (!validatePhone(phoneInput.value) || !validateEmail(emailInput.value)) {
      evt.preventDefault();

      if (!validateEmail(emailInput.value)) {
        email.classList.remove('form__input-block--error');
        email.classList.add('form__input-block--error');
      } else {
        email.classList.remove('form__input-block--error');
      }

      if (!validatePhone(phoneInput.value)) {
        phone.classList.remove('form__input-block--error');
        phone.classList.add('form__input-block--error');
      } else {
        phone.classList.remove('form__input-block--error');
      }

    } else {
      evt.preventDefault();

      if (modal.classList.contains('modal--show')) {
        modalWrapper.classList.add('modal__wrapper--done');
      } else {
        modal.classList.add('modal--show');
        form.querySelectorAll('.form__input-block').forEach((inputBlock) => {
          inputBlock.classList.remove('form__input-block--error');
          inputBlock.querySelector('input').value = '';
        })
        modalWrapper.classList.add('modal__wrapper--done');
      }

      // Тут отправить форму Ajax'ом
    }
  });
});

function closeModal() {
  const modal = document.getElementById('form_buy');
  const modalWrapper = modal.querySelector('.modal__wrapper');

  modal.querySelectorAll('.form__input-block').forEach((inputBlock) => {
    inputBlock.classList.remove('form__input-block--error');
    inputBlock.querySelector('input').value = '';
  })

  modal.classList.remove('modal--show');
  modalWrapper.classList.remove('modal__wrapper--done');
}

function validatePhone(phone) {
  let regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
  return regex.test(phone);
}

function validateEmail(email) {
  let regex = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
  return regex.test(email);
}

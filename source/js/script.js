const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

const navLinks = document.querySelectorAll('.main-nav__link');

navLinks.forEach((link) => {
  link.addEventListener('click', ()=> {
    if (navMain.classList.contains('main-nav--opened')) {
      navMain.classList.remove('main-nav--opened');
      navMain.classList.add('main-nav--closed');
    }
  });
});


const links = document.querySelectorAll('.js-buy');
const popup = document.getElementById('form_buy');
const closeBtn = popup.querySelector('.modal__close');

links.forEach((link) => {
  link.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (popup.classList.contains('modal--show')) {
      popup.classList.remove('modal--show');
    } else {
      popup.classList.add('modal--show');
    }
  });
});

popup.addEventListener('click', (evt) => {
  if(evt.target.closest('div') == null) {
    if (popup.classList.contains('modal--show')) {
      popup.classList.remove('modal--show');
    } 
  }
});

closeBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  popup.classList.remove('modal--show');
});

window.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    evt.preventDefault();

    if (popup.classList.contains('modal--show')) {
      popup.classList.remove('modal--show');
    }
  }
});



document.querySelectorAll(".btn__choose").forEach((btn) => {

  console.log(btn);
  btn.addEventListener('click', (evt) => {
    evt.preventDefault();
    const link = evt.target.closest('a');
    const id = link.hash;

    if(id !== undefined) {
      document.querySelector('.country--selected').classList.remove('country--selected');

      if(document.querySelector(id)) {
        document.querySelector(id).classList.add('country--selected');
      }
  
      const tabs = document.querySelectorAll('.countries__btn');
  
      tabs.forEach((tab) => {
        if(tab.classList.contains('countries__btn--selected')) 
          tab.classList.remove('countries__btn--selected');
        
        if(tab.hash == id) 
          tab.classList.add('countries__btn--selected');
      })
  
      if(link.classList.contains('place')) {
        document.querySelector(id).scrollIntoView();
      }
    }
  });
});








// const rates = document.querySelectorAll('.rate');

// rates.forEach( (rate) => {
//   rate.addEventListener("click", (evt) => {
//     rates.forEach( (a) => {
//       a.classList.remove('rate--selected');
//     })
//     evt.target.classList.add('rate--selected');
    
//   })
// });





// const form = popup.querySelector('form');
// const phone = popup.querySelector('[name=phone]');
// const email = popup.querySelector('[name=email]');

// let isStorageSupport = true;
// let storage = '';

// try {
//   storage = localStorage.getItem('login');
// } catch (err) {
//   isStorageSupport = false;
// }

// link.addEventListener('click', function (evt) {
//   evt.preventDefault();
//   popup.classList.add('modal--show');

//   if (storage) {
//     login.value = storage;
//     email.focus();
//   } else {
//     login.focus();
//   }
// });

// close.addEventListener('click', function (evt) {
//   evt.preventDefault();
//   popup.classList.remove('modal--show');
//   popup.classList.remove('modal--error');
// });

// form.addEventListener('submit', function (evt) {
//   if (!login.value || !password.value) {
//     evt.preventDefault();
//     popup.classList.remove('modal--error');
//     popup.offsetWidth = popup.offsetWidth;
//     popup.classList.add('modal--error');
//   } else {
//     if (isStorageSupport) {
//       localStorage.setItem('login', login.value);
//     }
//   }
// });


const projects = [{
  title: 'Rasa Running',
  img: 'images/thumbnailRaces.png',
  resume: 'Here you can find inspiration to start to run, one of my dreams is to earn the six-star marathon major medal, and on this web page, I will tell you my journey.',
  description: 'One of my dreams is to earn the six-star marathon major medal, here you can look at my journey to do it and if I can inspire at least one person to join this amazing running world I will be happy.',
  listOfTechnologies: ['HTML', 'CSS', 'JavaScript'],
  liveUrl: 'https://alexrs90.github.io/personalBrand-capstone1/',
  githubUrl: 'https://github.com/AlexRS90/personalBrand-capstone1',
},
{
  title: 'Multi-Post Stories',
  img: 'images/yogaDesktop.png',
  resume: 'A daily selection of privately<br> personalized reads; no accounts or<br> sign-ups required. has been the<br> industry',
  description: 'Up maids me an ample stood given. Certainty say suffering his him collected intention promotion. Hill sold ham men made lose case. Views abode law heard jokes too. Was are delightful solicitude discovered collecting man day. Resolving neglected sir tolerably but existence conveying for. Day his put off unaffected literature partiality inhabiting.',
  listOfTechnologies: ['HTML', 'Bootstrap', 'Ruby'],
  liveUrl: 'https://alexrs90.github.io/Portfolio/',
  githubUrl: 'https://www.github.com/AlexRS90/Portfolio',
},
{
  title: 'School Web Page',
  img: 'images/thumpnailTemplate.png',
  resume: 'A daily selection of privately<br> personalized reads; no accounts or<br> sign-ups required. has been the<br> industry',
  description: 'Arrival entered an if drawing request. How daughters not promotion few knowledge contented. Yet winter law behind number stairs garret excuse. Minuter we natural conduct gravity if pointed oh no. Am immediate unwilling of attempted admitting disposing it. Handsome opinions on am at it ladyship. ',
  listOfTechnologies: ['HTML', 'Bootstrap', 'Ruby'],
  liveUrl: 'https://alexrs90.github.io/Portfolio/',
  githubUrl: 'https://www.github.com/AlexRS90/Portfolio',
},
];

for (let i = 0; i <= 1; i += 1) {
  let cards = '';
  let index = 1;
  Object.keys(projects).forEach((project) => {
    cards += `<div class="gridItem grid3 backGroundImg${index}"><h2>${projects[project].title}</h2><p>${projects[project].resume}</p><ul class="d-flex"> <li><a href="#"> <img src="images/htmlTransparent.png" alt="htmlButton" class="buttonPropertiesWorks"></a></li><li><a href="#"> <img src="images/bootstrapTransparent.png" alt="bootstrapButton" class="buttonPropertiesWorks"></a></li><li><a href="#"><img src="images/rubyTransparent.png" alt="rubyButton" class="buttonPropertiesWorks"></a> </li> </ul><input class="btnPrimary buttonProperties project-${index}" type="button" value="See Project"></div>`;
    index += 1;
  });
  document.querySelector('#works-section').innerHTML += cards;
  cards = '';
  index = 1;
}

const mobileBurger = document.querySelectorAll('.burger');
const mobileMenu = document.querySelector('#mobile-menu');
const menuItem = document.querySelectorAll('.menu-item');
const popupToggle = document.querySelectorAll('.buttonProperties');
const popupWindow = document.querySelector('.pop-up-main');
const popupCloser = document.querySelector('.close-pop-up');
const popupTitle = document.querySelector('.pop-up-title');
const popupText = document.querySelector('.pop-up-text');

function check() {
  mobileMenu.classList.toggle('menu-hidden');
}

menuItem.forEach((item) => {
  item.addEventListener('click', check);
});

mobileBurger.forEach((item) => {
  item.addEventListener('click', check);
});

function hydrate(project) {
  popupText.innerHTML = projects[project].description;
  popupTitle.innerHTML = projects[project].title;
  document.querySelector('.pop-up-img').src = projects[project].img;
  document.querySelector('#img-button-1').href = projects[project].liveUrl;
  document.querySelector('#img-button-2').href = projects[project].githubUrl;
}

function popupVisibility(evt) {
  if (evt.currentTarget.classList.contains('project-1')) {
    hydrate(0);
  } else if (evt.currentTarget.classList.contains('project-2')) {
    hydrate(1);
  } else if (evt.currentTarget.classList.contains('project-3')) {
    hydrate(2);
  }
  popupWindow.classList.toggle('menu-hidden');
}

popupCloser.addEventListener('click', popupVisibility);
popupToggle.forEach((item) => item.addEventListener('click', popupVisibility));

// FORM Validation Logic

const contactForm = document.querySelector('#contact-form');
const email = document.querySelector('#email-address');
const errors = document.querySelector('.errors');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  errors.innerHTML = '';
  errors.classList.add('menu-hidden');
  const emailValue = email.value;
  if (emailValue === emailValue.toLowerCase()) {
    contactForm.submit();
  } else {
    errors.innerHTML += `<li>The ${email.name} field has to be lowercase.</li>`;
    errors.classList.remove('menu-hidden');
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && (popupWindow.classList.contains('menu-hidden') === false)) {
    popupWindow.classList.add('menu-hidden');
  }
});

// Data storage section

const userName = document.querySelector('#full-name');
const userMessage = document.querySelector('#message');

let userInfo = {
  formName: userName.value,
  formeMail: email.value,
  formMessage: userMessage.value,
};

if (window.localStorage.getItem('userInfo')) {
  userInfo = JSON.parse(window.localStorage.getItem('userInfo'));
  userName.value = userInfo.formName;
  email.value = userInfo.formeMail;
  userMessage.value = userInfo.formMessage;
}

window.addEventListener('keyup', () => {
  userInfo.formName = userName.value;
  userInfo.formeMail = email.value;
  userInfo.formMessage = userMessage.value;
  window.localStorage.setItem('userInfo', JSON.stringify(userInfo));
});
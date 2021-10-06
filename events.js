const projects = {
  numbers: {
    title: 'Number around the internet',
    img: 'images/SnapsPortfolio.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    listOfTechnologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveUrl: 'https://alexrs90.github.io/Portfolio/',
    githubUrl: 'https://www.github.com/AlexRS90/Portfolio',
  },
  multiposts: {
    title: 'Multi-Post Stories',
    img: 'images/yogaDesktop.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    listOfTechnologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveUrl: 'https://alexrs90.github.io/Portfolio/',
    githubUrl: 'https://www.github.com/AlexRS90/Portfolio',
  },
  greater: {
    title: 'School Web Page',
    img: 'images/SnapsPortfolio.png',
    description: 'Arrival entered an if drawing request. How daughters not promotion few knowledge contented. Yet winter law behind number stairs garret excuse. Minuter we natural conduct gravity if pointed oh no. Am immediate unwilling of attempted admitting disposing it. Handsome opinions on am at it ladyship. ',
    listOfTechnologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveUrl: 'https://alexrs90.github.io/Portfolio/',
    githubUrl: 'https://www.github.com/AlexRS90/Portfolio',
  },
};

for (let i = 0; i <= 1; i += 1) {
  let cards = '';
  let index = 1;
  Object.keys(projects).forEach((project) => {
    cards += `<div class="gridItem grid3 backGroundImg"><h2>${projects[project].title}</h2><p>A daily selection of privately<br> personalized reads; no accounts or<br> sign-ups required. has been the<br> industry's standard</p><ul class="d-flex"> <li><a href="#"> <img src="images/htmlTransparent.png" alt="htmlButton" class="buttonPropertiesWorks"></a></li><li><a href="#"> <img src="images/bootstrapTransparent.png" alt="bootstrapButton" class="buttonPropertiesWorks"></a></li><li><a href="#"><img src="images/rubyTransparent.png" alt="rubyButton" class="buttonPropertiesWorks"></a> </li> </ul> <div class="alingButton"><input class="btnPrimary buttonProperties project-${index}" type="button" value="See Project"></div></div>`;
    index += 1;
  });
  document.querySelector('#works-section').innerHTML += cards;
  cards = '';
  index = 1;
}

const mobileBurger = document.querySelectorAll('.burger');
const mobileMenu = document.querySelector('#mobile-menu');
let menuItem = document.querySelectorAll('.menu-item');
const popupToggle = document.querySelectorAll('.buttonProperties');
const popupWindow = document.querySelector('.pop-up-main');
const popupCloser = document.querySelector('.close-pop-up');
const popupTitle = document.querySelector('.pop-up-title');
const popupText = document.querySelector('.pop-up-text');
const popupOpener = document.querySelector('.buttonOpener');

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
    hydrate('numbers');
  } else if (evt.currentTarget.classList.contains('project-2')) {
    hydrate('greater');
  } else if (evt.currentTarget.classList.contains('project-3')) {
    hydrate('multiposts');
  }
  popupWindow.classList.toggle('menu-hidden');
}

popupCloser.addEventListener('click', popupVisibility);
popupToggle.forEach((item) => item.addEventListener('click', popupVisibility));
popupOpener.addEventListener('click', popupVisibility);

window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && (popupWindow.classList.contains('menu-hidden') === false)) {
    popupWindow.classList.add('menu-hidden');
  }
});
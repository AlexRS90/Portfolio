let mobileBurger=document.querySelectorAll('.burger');
let mobileMenu=document.querySelector('#mobile-menu');
let menuItem=document.querySelectorAll('.menu-item').forEach(item=>{
    item.addEventListener('click',check);
  });
const popupToggle = document.querySelectorAll('.buttonProperties')
const popupWindow =  document.querySelector('.pop-up-main')
const popupCloser = document.querySelector('.close-pop-up')
const popupTitle = document.querySelector('.pop-up-title')
const popupText = document.querySelector('.pop-up-text')
const popupOpener = document.querySelector('.buttonOpener')

const projects = {
  numbers: {
    title: 'Number around the internet',
    img: 'images/SnapPortfolio.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    listOfTechnologies: ['HTML','Bootstrap','Ruby'],
    liveUrl: 'https://alexrs90.github.io/Portfolio/',
    githubUrl: 'https://www.github.com/AlexRS90/Portfolio'
  },
  greater: {
    title: 'School Web Page',
    img: 'images/SnapPortfolio.png',
    description: 'Arrival entered an if drawing request. How daughters not promotion few knowledge contented. Yet winter law behind number stairs garret excuse. Minuter we natural conduct gravity if pointed oh no. Am immediate unwilling of attempted admitting disposing it. Handsome opinions on am at it ladyship. ',
    listOfTechnologies: ['HTML','Bootstrap','Ruby'],
    liveUrl: 'https://alexrs90.github.io/Portfolio/',
    githubUrl: 'https://www.github.com/AlexRS90/Portfolio'
  }
}


function check (){
  mobileMenu.classList.toggle('menu-hidden');
}

mobileBurger.forEach(item=>{
  item.addEventListener('click',check);
});

function hydrate (project){
popupText.innerHTML = projects[project].description
popupTitle.innerHTML = projects[project].title
}

function popupVisibility (evt){
  if(evt.currentTarget.classList.contains('project-1')){
    hydrate('numbers')
  }else if (evt.currentTarget.classList.contains('project-2')){
    hydrate('greater')
  }
  popupWindow.classList.toggle('menu-hidden');
}

popupCloser.addEventListener('click', popupVisibility)
popupToggle.forEach((item) => item.addEventListener('click', popupVisibility))
popupOpener.addEventListener('click', popupVisibility)

window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && (popupWindow.classList.contains('menu-hidden') === false)) {
    popupWindow.classList.add('menu-hidden')
  }
});

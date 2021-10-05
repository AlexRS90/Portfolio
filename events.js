let mobileBurger=document.querySelectorAll('.burger');
let mobileMenu=document.querySelector('#mobile-menu');
let menuItem=document.querySelectorAll('.menu-item').forEach(item=>{
    item.addEventListener('click',check);
  });

function check (){
  mobileMenu.classList.toggle('menu-hidden');
}

mobileBurger.forEach(item=>{
  item.addEventListener('click',check);
});

const navTitles = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');

function handleEnterElement(){
this.classList.add('trigger-enter');        
  setTimeout(()=> this.classList.add('trigger-enter-active'),150);  
  background.classList.add('open');
}

function handleLeaveElement(){
this.classList.remove('trigger-enter','trigger-enter-active');
background.classList.remove('open');
}

navTitles.forEach( navTitle => navTitle.addEventListener('mouseenter',handleEnterElement));
navTitles.forEach( navTitle => navTitle.addEventListener('mouseleave',handleLeaveElement));

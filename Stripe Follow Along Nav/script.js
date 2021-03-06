const navTitles = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnterElement(){
this.classList.add('trigger-enter');        
  setTimeout(()=> this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'),150);  
  background.classList.add('open');
  const dropdown = this.querySelector('.dropdown');
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();
  // console.log(dimensions);
  console.log(dropdown);
  
background.style.setProperty('width',`${dropdownCoords.width}px`);
background.style.setProperty('height',`${dropdownCoords.height}px`);
background.style.setProperty('left',`${dropdownCoords.left - navCoords.left}px`);
background.style.setProperty('top',`${dropdownCoords.top - navCoords.top}px`);
}

function handleLeaveElement(){
this.classList.remove('trigger-enter','trigger-enter-active');
background.classList.remove('open');
}

navTitles.forEach( navTitle => navTitle.addEventListener('mouseenter',handleEnterElement));
navTitles.forEach( navTitle => navTitle.addEventListener('mouseleave',handleLeaveElement));

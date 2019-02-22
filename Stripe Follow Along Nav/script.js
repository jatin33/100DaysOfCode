const navTitles = document.querySelectorAll('.cool > li');


function handleEnterElement(){
console.log('enters');
this.classList.add('.dropdown');
}

function handleLeaveElement(){
console.log('leaves');
this.classList.remove('.dropdown');
}

navTitles.forEach( navTitle => navTitle.addEventListener('mouseenter',handleEnterElement));
navTitles.forEach( navTitle => navTitle.addEventListener('mouseleave',handleLeaveElement));

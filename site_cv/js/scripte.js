//le menu hamburger:
function toggleMenu(evt) {
                    nav.classList.toggle('visible');
                    monBtn.children[0].classList.toggle('fa-bars'); 
                    monBtn.children[0].classList.toggle('fa-times'); 
                   
            }

var monBtn = document.querySelector('header button');
var nav = document.querySelector('.barreNav');
var links = document.querySelectorAll('nav a');

monBtn.addEventListener('click', toggleMenu); 
            
for(var i = 0; i < links.length; i++) {
 links[i].addEventListener('click', toggleMenu);
}





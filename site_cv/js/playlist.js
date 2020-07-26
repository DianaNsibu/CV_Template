//Les playlist: 

var playlist1 = document.getElementById('music1');
var playlist2 = document.getElementById('music2');
var playlist3 = document.getElementById('music3');
var music1 = document.getElementById('women');
var music2 = document.getElementById('people');
var music3 = document.getElementById('gospel');

var music = [music1, music2, music3 ];
var playlist = [playlist1, playlist2, playlist3];

playlist[0].addEventListener('click', function () { music[0].classList.toggle('visible'); } ); 
playlist[1].addEventListener('click', function () { music[1].classList.toggle('visible'); } ); 
playlist[2].addEventListener('click', function () { music[2].classList.toggle('visible'); } ); 


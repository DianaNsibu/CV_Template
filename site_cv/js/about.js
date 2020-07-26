//Les ancres:
var ancre = document.getElementById('arrow1');

window.addEventListener("scroll", function(){
    
if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    ancre.classList.add("visible");
    
   }
else {
    ancre.className ="arrow";
    
}

})



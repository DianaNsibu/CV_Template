var ancre1 = document.getElementById('arrow2');
console.log(ancre1);

window.addEventListener("scroll", function(){
    
if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
     ancre1.classList.add("visible");  
}
   
   
else {
    ancre1.className ="arrow";
   
}

})